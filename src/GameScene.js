import { Scene } from 'phaser';
import { levels, sequences } from './levels.js';
import hasPoint from './functions/hasPoint';
import playLevel from './functions/playLevel.js';
import * as Tone from 'tone';
import restart from './functions/restart';
import checkKey from './functions/checkKey';
import Player from './components/Player.js';
import Keys from './components/Keys.js';

class GameScene extends Scene {
  constructor() {
    super('game');

    this.platforms;
    this.cursors;
    this.score = 0;
    this.gameOver = false;
    this.scoreText;
    this.colliderActivated = true;
    this.gameStart = true;
    this.startText;
    this.songName;
    this.level = 1;
    this.levelText;
    this.successText;
    this.playedSequence = [];
    this.numberOfCollisions = 0;
    this.keys = new Keys(this);
    this.player = new Player(this);
  }

  preload() {
    this.load.image('background', '/background.png');
    this.load.image('ground', '/ground3.png');
    this.load.image('platform', '/platform2.png');
    this.load.image('button', '/button2.png');
    this.player.preload();
    this.keys.preload();
  }

  create() {
    this.add.image(400, 300, 'background');

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 588, 'ground').setScale(2).refreshBody();

    this.platforms.create(400, 280, 'platform').setScale(0.5).refreshBody();

    this.player.create();
    this.keys.create();

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    this.bombs = this.physics.add.group();

    //  The score
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      fill: '#FFF',
    });

    // The level
    this.levelText = this.add.text(650, 16, `Level ${this.level}`, {
      fontSize: '32px',
      fill: '#FFF',
    });

    this.startText = this.add.text(260, 16, '', {
      fontSize: '32px',
      fill: '#FFF',
    });

    // restart-button in bottom corner
    this.restartText = this.add.text(700, 580, 'restart');
    this.restartText
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        restart(this, levels);
      });

    this.successText = this.add.text(350, 200, '', {
      fontSize: '28px',
      fill: '#FFF',
    });
    //  Colliders
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

    // function to start game
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
      this.player.setVelocityY(-500);
      this.colliderActivated = true;
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(500);
    }
  }

  startGame(gameStart) {
    if (this.level === 6) {
      this.scene.start('endscene');
    }
    if (gameStart) {
      this.songName = this.playSequence();
      this.successText.setText('');
    }
    if (!gameStart) {
      setTimeout(() => {
        this.startText.setX(360);
        this.startText.setText('GO!');
        this.player.body.enable = true;
        this.player.setVisible(true);
      }, 5000);
    }
  }

  playSequence() {
    if (this.level === 6) {
      return;
    }
    this.numberOfCollisions = 0;

    this.songName = playLevel(this, levels[this.level - 1]);

    if (levels[this.level - 1].isCompleted) {
      this.level++;
    }
    return this.songName;
  }

  hitKey(player, key) {
    checkKey(this, key, sequences, restart, levels);

    this.numberOfCollisions++;

    key.anims.play('pressed', true);

    key.setSize(90, 100, true);
    key.setOffset(0, 25);

    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'triangle',
      },
    }).toDestination();
    if (key.name === 'piano-0') {
      synth.triggerAttackRelease('C4', '8n');
    }
    if (key.name === 'piano-1') {
      synth.triggerAttackRelease('D4', '4n');
    }
    if (key.name === 'piano-2') {
      synth.triggerAttackRelease('E4', '4n');
    }
    if (key.name === 'piano-3') {
      synth.triggerAttackRelease('F4', '4n');
    }
    if (key.name === 'piano-4') {
      synth.triggerAttackRelease('G4', '4n');
    }
    if (key.name === 'piano-5') {
      synth.triggerAttackRelease('A4', '4n');
    }
    if (key.name === 'piano-6') {
      synth.triggerAttackRelease('B4', '4n');
    }
    if (key.name === 'piano-7') {
      synth.triggerAttackRelease('C5', '4n');
    }

    this.playedSequence.push(key.name);

    if (hasPoint(this, this.playedSequence, sequences[this.songName])) {
      this.successText.setText('Correct!');

      this.playedSequence = [];
      this.gameStart = true;
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
}
export { GameScene };
