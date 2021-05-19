import Phaser, { Scene } from 'phaser';
import { levelOneMelodies, levelTwoMelodies, sequences } from './melodies.js';
import * as Tone from 'tone';

class GameScene extends Scene {
  constructor() {
    super('game');

    this.player;
    this.stars;
    this.bombs;
    this.platforms;
    this.cursors;
    this.score = 0;
    this.gameOver = false;
    this.scoreText;
    this.keys;
    this.colliderActivated = true;
    this.gameStart = true;
    this.startText;
    this.songName;
    this.playedSequence = [];
  }

  preload() {
    this.load.image('background', 'assets/background.png');
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

  create() {
    this.add.image(400, 300, 'background');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.physics.add.staticGroup();
    // keys = this.physics.add.staticGroup();
    // //  Here we create the ground.
    // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.platforms.create(400, 588, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    // platforms.create(600, 400, "ground");
    this.platforms.create(400, 280, 'platform');

    // The player and its settings
    this.player = this.physics.add.sprite(400, 0, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setCollideWorldBounds(true);

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
    this.cursors = this.input.keyboard.createCursorKeys();

    this.bombs = this.physics.add.group();

    //  The score
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      fill: '#000',
    });

    let index = 0;
    this.keys = this.physics.add.group({
      key: 'pianokey',
      repeat: 7,
      name: 'hello world',
      setXY: { x: 55, y: 475, stepX: 98 },
    });

    this.keys.children.entries.map((item, i) => (item.name = 'piano-' + i));

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.keys, this.keys);
    this.physics.add.collider(this.keys, this.platforms);
    this.physics.add.collider(this.player, this.keys);

    this.keys.children.iterate(function (child) {
      child.body.checkCollision.left = false;
      child.body.checkCollision.bottom = true;
      child.body.checkCollision.up = true;
      child.body.checkCollision.right = false;
    });

    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.keys,
      this.hitKey,
      () => {
        return this.colliderActivated;
      },
      this
    );

    this.startText = this.add.text(260, 16, '', {
      fontSize: '32px',
      fill: '#000',
    });

    this.startGame(this.gameStart);
  }

  update() {
    if (this.gameOver) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.keys.children.iterate(function (child) {
        child.anims.play('notpressed', true);
        child.setTint(0xffffff);
      });
      this.player.setVelocityY(-330);
      this.colliderActivated = true;
    }
  }

  startGame(gameStart) {
    if (gameStart) {
      this.songName = this.playSequence();
    }
    if (!gameStart) {
      setTimeout(() => {
        this.startText.setText('GO!');
        this.player.body.enable = true;
        this.player.setVisible(true);
      }, 5000);
    }
  }

  //   collectStar(player, star) {
  //     this.star.disableBody(true, true);

  //     //  Add and update the score
  //     score += 10;
  //     scoreText.setText('Score: ' + score);

  //     if (stars.countActive(true) === 0) {
  //       //  A new batch of stars to collect
  //       stars.children.iterate(function (child) {
  //         child.enableBody(true, child.x, 0, true, true);
  //       });

  //       var x =
  //         player.x < 400
  //           ? Phaser.Math.Between(400, 800)
  //           : Phaser.Math.Between(0, 400);

  //       var bomb = bombs.create(x, 16, 'bomb');
  //       bomb.setBounce(1);
  //       bomb.setCollideWorldBounds(true);
  //       bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  //       bomb.allowGravity = false;
  //     }
  //   }

  playSequence() {
    const synth = new Tone.Synth().toDestination();
    this.startText.setText('Play this melody');

    console.log(levelOneMelodies);
    let songArray = Object.entries(levelOneMelodies);
    console.log(songArray);

    if (
      Object.keys(levelOneMelodies).length === 0 &&
      levelOneMelodies.constructor === Object
    ) {
      songArray = Object.entries(levelTwoMelodies);

      const random = Math.floor(Math.random() * songArray.length);

      this.songName = songArray[random][0];
      const songFunction = songArray[random][1];
      songFunction(this);

      console.log(this.player);
      this.player.body.enable = false;
      this.player.setVisible();

      this.gameStart = false;
      this.startGame(this.gameStart);

      return this.songName;
    }

    const random = Math.floor(Math.random() * songArray.length);

    this.songName = songArray[random][0];
    const songFunction = songArray[random][1];
    songFunction(this);

    this.player.body.enable = false;
    this.player.setVisible();

    this.gameStart = false;
    this.startGame(this.gameStart);

    return this.songName;
  }

  hitKey(player, key) {
    key.setTint(0x7dcea0);
    key.anims.play('pressed', true);
    var pianoImg = this.textures.get('pianokey');

    pianoImg.getSourceImage();

    key.setSize(90, 100, true);
    key.setOffset(0, 25);

    const synth = new Tone.Synth().toDestination();
    if (key.name === this.keys.children.entries[0].name) {
      synth.triggerAttackRelease('C4', '8n');
      console.log('first key!');
    }

    if (key === this.keys.children.entries[1]) {
      synth.triggerAttackRelease('D4', '4n');
      console.log('second key!');
    }
    if (key === this.keys.children.entries[2]) {
      synth.triggerAttackRelease('E4', '4n');
      console.log('third key!');
    }
    if (key === this.keys.children.entries[3]) {
      synth.triggerAttackRelease('F4', '4n');
      console.log('fourth key!');
    }
    if (key === this.keys.children.entries[4]) {
      synth.triggerAttackRelease('G4', '4n');
      console.log('fifth key!');
    }
    if (key === this.keys.children.entries[5]) {
      synth.triggerAttackRelease('A4', '4n');
      console.log('sixth key!');
    }
    if (key === this.keys.children.entries[6]) {
      synth.triggerAttackRelease('B4', '4n');
      console.log('seventh key!');
    }
    if (key === this.keys.children.entries[7]) {
      synth.triggerAttackRelease('C5', '4n');
      console.log('octave!');
    }

    this.playedSequence.push(key.name);

    // console.log(playedSequence);

    if (this.hasPoint(this.playedSequence, sequences[this.songName])) {
      console.log('get point for', this.songName);
      this.playedSequence = [];
      this.gameStart = true;
      delete levelOneMelodies[this.songName];

      setTimeout(() => {
        this.keys.children.iterate(function (child) {
          child.anims.play('notpressed', true);
          child.setTint(0xffffff);
        });
        this.player.setX(400);
        this.player.setY(240);
        this.startGame(this.gameStart);
      }, 1000);
    }

    this.colliderActivated = false;
  }

  hasPoint(userInput, target) {
    const str = userInput.join('');

    if (str.includes(target)) {
      this.score += 10;
      this.scoreText.setText('Score: ' + this.score);
    }

    return str.includes(target);
  }

  hitBomb(player, bomb) {
    this.physics.pause();

    this.player.setTint(0xff0000);

    this.player.anims.play('turn');

    this.gameOver = true;
  }
}
export { GameScene };
