import { Scene } from 'phaser';
import Player from './components/Player';

class PreloadScene extends Scene {
  constructor() {
    super('preload');
    this.player = new Player(this);
    this.cursors;
  }

  preload() {
    this.load.image('startframe', '/startframe.png');
    this.load.image('redpinknote', '/redpinknote.png');
    this.player.preload();
  }

  create() {
    this.add.image(400, 300, 'startframe');
    this.text = this.add.text(300, 300, 'CLICK HERE TO START');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.create();

    const redpinknote = this.add.particles('redpinknote');
    redpinknote.createEmitter({
      speed: 125,
      gravity: { x: 0, y: 200 },
      scale: { start: 0.1, end: 1 },
      follow: this.player,
    });
    this.text
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.scene.start('game'));
  }

  update() {
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
      this.player.setVelocityY(-500);
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(500);
    }
  }
}

export default PreloadScene;
