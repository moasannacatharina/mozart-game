import { Scene } from 'phaser';
import Player from './components/Player.js';

class EndScene extends Scene {
  constructor() {
    super('endscene');
    this.player = new Player(this);
    this.cursors;
  }

  preload() {
    this.player.preload();
    this.load.image('endframe', '/endframe.png');
    this.load.image('pinknote', '/pinknote.png');
    this.load.image('redpinknote', '/redpinknote.png');
    this.load.image('orangenote', '/orangenote.png');
    this.load.image('lightgreennote', '/lightgreennote.png');
  }

  create() {
    // this.cameras.main.setBackgroundColor('#030535');
    this.add.image(400, 300, 'endframe');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.create();

    var pinknote = this.add.particles('pinknote');
    var redpinknote = this.add.particles('redpinknote');
    var lightgreennote = this.add.particles('lightgreennote');
    var orangenote = this.add.particles('orangenote');

    var pinkEmitter = pinknote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    var lightgreenEmitter = lightgreennote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    var orangeEmitter = orangenote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    redpinknote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
      follow: this.player,
    });
    pinkEmitter.setPosition(400, 300);
    lightgreenEmitter.setPosition(200, 300);
    orangeEmitter.setPosition(600, 300);
    // this.text = this.add.text(350, 100, 'YOU WIN', { fontSize: '30px' });
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

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-380);
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(300);
    }
  }
}

export default EndScene;
