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
    this.load.image('rednote', '/rednote.png');
    this.load.image('bluenote', '/bluenote.png');
    this.load.image('yellownote', '/yellownote.png');
    this.load.image('greennote', '/greennote.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('#030535');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.create();

    var rednote = this.add.particles('rednote');
    var bluenote = this.add.particles('bluenote');
    var greennote = this.add.particles('greennote');
    var yellownote = this.add.particles('yellownote');

    var redEmitter = rednote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    var greenEmitter = greennote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    var yellowEmitter = yellownote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
    });
    bluenote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
      follow: this.player,
    });
    redEmitter.setPosition(400, 300);
    greenEmitter.setPosition(200, 300);
    yellowEmitter.setPosition(600, 300);
    this.text = this.add.text(350, 100, 'YOU WIN', { fontSize: '30px' });
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
