import Phaser from 'phaser';
import * as Tone from 'tone';
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
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

var game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/background.png');
  this.load.image('ground', 'assets/platform.png');
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
  this.add.image(400, 300, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();
  // keys = this.physics.add.staticGroup();
  // //  Here we create the ground.
  // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  //  Now let's create some ledges
  // platforms.create(600, 400, "ground");
  platforms.create(50, 275, 'ground');
  // platforms.create(750, 220, "ground");

  // keys.create(50, 535, "key");
  // keys.create(145, 535, "key");
  // keys.create(240, 535, "key");
  // keys.create(335, 535, "key");
  // keys.create(430, 535, "key");
  // keys.create(525, 535, "key");
  // keys.create(620, 535, "key");
  // keys.create(715, 535, "key");

  // The player and its settings
  player = this.physics.add.sprite(100, 0, 'dude');

  //  Player physics properties. Give the little guy a slight bounce.
  // player.setBounce(0.2);
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

  //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
  // stars = this.physics.add.group({
  //   key: 'star',
  //   repeat: 11,
  //   setXY: { x: 12, y: 0, stepX: 70 },
  // });

  // stars.children.iterate(function (child) {
  //  Give each star a slightly different bounce
  //   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  // });

  bombs = this.physics.add.group();

  //  The score
  scoreText = this.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    fill: '#000',
  });

  let index = 0;
  keys = this.physics.add.group({
    key: 'pianokey',
    repeat: 7,
    name: index++,
    setXY: { x: 55, y: 475, stepX: 98 },
  });

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(player, platforms);
  // this.physics.add.collider(stars, platforms);
  // this.physics.add.collider(stars, keys);
  this.physics.add.collider(keys, keys);
  this.physics.add.collider(keys, platforms);
  this.physics.add.collider(player, keys);

  keys.children.iterate(function (child) {
    child.body.checkCollision.left = false;
    child.body.checkCollision.bottom = true;
    child.body.checkCollision.up = true;
    child.body.checkCollision.right = false;
  });

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  // this.physics.add.overlap(player, stars, collectStar, null, this);

  this.physics.add.overlap(
    player,
    keys,
    hitKey,
    () => {
      return colliderActivated;
    },
    this
  );

  this.physics.add.collider(player, bombs, hitBomb, null, this);
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

function hitKey(player, key) {
  key.setTint(0x7dcea0);
  key.anims.play('pressed', true);
  var pianoImg = this.textures.get('pianokey');

  pianoImg.getSourceImage();

  key.setSize(90, 100, true);
  key.setOffset(0, 25);

  console.log(key.body.offset);

  const synth = new Tone.Synth().toDestination();
  if (key === keys.children.entries[0]) {
    synth.triggerAttackRelease('C4', '8n');
    console.log('first key!');
  }

  if (key === keys.children.entries[1]) {
    synth.triggerAttackRelease('D4', '4n');
    console.log('second key!');
  }
  if (key === keys.children.entries[2]) {
    synth.triggerAttackRelease('E4', '8n');
    console.log('third key!');
  }
  if (key === keys.children.entries[3]) {
    synth.triggerAttackRelease('F4', '8n');
    console.log('fourth key!');
  }
  if (key === keys.children.entries[4]) {
    synth.triggerAttackRelease('G4', '8n');
    console.log('fifth key!');
  }
  if (key === keys.children.entries[5]) {
    synth.triggerAttackRelease('A4', '8n');
    console.log('sixth key!');
  }
  if (key === keys.children.entries[6]) {
    synth.triggerAttackRelease('B4', '8n');
    console.log('seventh key!');
  }
  if (key === keys.children.entries[7]) {
    synth.triggerAttackRelease('C5', '8n');
    console.log('octave!');
  }

  colliderActivated = false;
}

function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play('turn');

  gameOver = true;
}
