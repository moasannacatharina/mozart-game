import Phaser from 'phaser';
import * as Tone from 'tone';
import { levelOneMelodies, levelTwoMelodies, sequences } from './melodies.js';
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
let keys;
let colliderActivated = true;
let gameStart = true;
let startText;
let songName;
let playedSequence = [];

var game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/background.png');
  this.load.image('background', 'assets/background2.png');
  this.load.image('ground', 'assets/ground3.png');
  this.load.image('platform', 'assets/platform2.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.image('key', 'assets/key.png');
  this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48,
  });
  this.load.spritesheet('pianokey', 'assets/pianokey.png', {
    frameWidth: 100,
    frameHeight: 125,
  });
}

function create() {
  //  A simple background for our game
  this.add.image(400, 300, 'background');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();
  // keys = this.physics.add.staticGroup();
  // //  Here we create the ground.
  // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  platforms.create(400, 588, 'ground').setScale(2).refreshBody();

  //  Now let's create some ledges
  // platforms.create(600, 400, "ground");
  platforms.create(400, 280, 'platform');

  // The player and its settings
  player = this.physics.add.sprite(400, 0, 'dude');

  //  Player physics properties. Give the little guy a slight bounce.
  player.setCollideWorldBounds(true);

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'notpressed',
    frames: this.anims.generateFrameNumbers('pianokey', { start: 0, end: 0 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'pressed',
    frames: this.anims.generateFrameNumbers('pianokey', { start: 1, end: 0 }),
    frameRate: 0,
    repeat: 0,
  });

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  bombs = this.physics.add.group();

  //  The score
  scoreText = this.add.text(16, 16, 'Score: 0', {
    fontSize: '32px',
    fill: '#000',
  });

  let index = 0;
  keys = this.physics.add.group({
    key: 'pianokey',
    repeat: 7,
    name: 'hello world',
    setXY: { x: 55, y: 475, stepX: 98 },
  });

  keys.children.entries.map((item, i) => (item.name = 'piano-' + i));

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(keys, keys);
  this.physics.add.collider(keys, platforms);
  this.physics.add.collider(player, keys);

  keys.children.iterate(function (child) {
    child.body.checkCollision.left = false;
    child.body.checkCollision.bottom = true;
    child.body.checkCollision.up = true;
    child.body.checkCollision.right = false;
  });

  this.physics.add.collider(player, bombs, hitBomb, null, this);

  this.physics.add.overlap(
    player,
    keys,
    hitKey,
    () => {
      return colliderActivated;
    },
    this
  );

  startText = this.add.text(260, 16, '', {
    fontSize: '32px',
    fill: '#000',
  });

  startGame(gameStart);
}

function update() {
  if (gameOver) {
    return;
  }

  if (cursors.left.isDown) {
    player.setVelocityX(-160);

    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    keys.children.iterate(function (child) {
      child.anims.play('notpressed', true);
      child.setTint(0xffffff);
    });
    player.setVelocityY(-330);
    colliderActivated = true;
  }
}

function startGame(gameStart) {
  if (gameStart) {
    songName = playSequence();
  }
  if (!gameStart) {
    setTimeout(function () {
      startText.setText('GO!');
      player.body.enable = true;
      player.setVisible(true);
    }, 5000);
  }
}

function collectStar(player, star) {
  star.disableBody(true, true);

  //  Add and update the score
  score += 10;
  scoreText.setText('Score: ' + score);

  if (stars.countActive(true) === 0) {
    //  A new batch of stars to collect
    stars.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });

    var x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
  }
}

function playSequence() {
  const synth = new Tone.Synth().toDestination();
  startText.setText('Play this melody');

  // console.log(levelOneMelodies);
  let songArray = Object.entries(levelOneMelodies);
  // console.log(songArray);

  if (
    Object.keys(levelOneMelodies).length === 0 &&
    levelOneMelodies.constructor === Object
  ) {
    console.log(levelTwoMelodies);

    songArray = Object.entries(levelTwoMelodies);

    const random = Math.floor(Math.random() * songArray.length);

    songName = songArray[random][0];
    const songFunction = songArray[random][1];
    songFunction();

    player.body.enable = false;
    player.setVisible(false);

    gameStart = false;
    startGame(gameStart);

    return songName;
  }

  const random = Math.floor(Math.random() * songArray.length);

  songName = songArray[random][0];
  const songFunction = songArray[random][1];
  songFunction();

  player.body.enable = false;
  player.setVisible(false);

  gameStart = false;
  startGame(gameStart);

  return songName;
}

function hitKey(player, key) {
  key.setTint(0x7dcea0);
  key.anims.play('pressed', true);
  var pianoImg = this.textures.get('pianokey');

  pianoImg.getSourceImage();

  key.setSize(90, 100, true);
  key.setOffset(0, 25);

  const synth = new Tone.Synth().toDestination();
  if (key.name === keys.children.entries[0].name) {
    synth.triggerAttackRelease('C4', '8n');
    console.log('first key!');
  }

  if (key === keys.children.entries[1]) {
    synth.triggerAttackRelease('D4', '4n');
    console.log('second key!');
  }
  if (key === keys.children.entries[2]) {
    synth.triggerAttackRelease('E4', '4n');
    console.log('third key!');
  }
  if (key === keys.children.entries[3]) {
    synth.triggerAttackRelease('F4', '4n');
    console.log('fourth key!');
  }
  if (key === keys.children.entries[4]) {
    synth.triggerAttackRelease('G4', '4n');
    console.log('fifth key!');
  }
  if (key === keys.children.entries[5]) {
    synth.triggerAttackRelease('A4', '4n');
    console.log('sixth key!');
  }
  if (key === keys.children.entries[6]) {
    synth.triggerAttackRelease('B4', '4n');
    console.log('seventh key!');
  }
  if (key === keys.children.entries[7]) {
    synth.triggerAttackRelease('C5', '4n');
    console.log('octave!');
  }

  playedSequence.push(key.name);

  // console.log(sequences[songName]);
  // console.log(playedSequence);

  if (hasPoint(playedSequence, sequences[songName])) {
    console.log('get point for', songName);
    playedSequence = [];
    gameStart = true;
    delete levelOneMelodies[songName];

    setTimeout(() => {
      keys.children.iterate(function (child) {
        child.anims.play('notpressed', true);
        child.setTint(0xffffff);
      });
      player.setX(400);
      player.setY(240);
      startGame(gameStart);
    }, 1000);
  }

  colliderActivated = false;
}

function hasPoint(userInput, target) {
  const str = userInput.join('');

  if (str.includes(target)) {
    score += 10;
    scoreText.setText('Score: ' + score);
  }

  return str.includes(target);
}

function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play('turn');

  gameOver = true;
}

export { keys };
