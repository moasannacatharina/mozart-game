import Phaser, { Scene } from 'phaser';

class PreloadScene extends Scene {
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

export default PreloadScene;
