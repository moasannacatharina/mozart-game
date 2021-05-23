import { Scene } from 'phaser';

class EndScene extends Scene {
  constructor() {
    super('preload');
  }

  preload() {}

  create() {
    this.text = this.add.text(300, 200, 'CLICK HERE TO START');

    this.text
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.scene.start('game'));
  }
}

export default EndScene;
