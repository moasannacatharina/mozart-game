import Phaser from 'phaser';
import PreloadScene from './PreloadScene';
import { GameScene } from './GameScene';
import EndScene from './EndScene';

const Config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false,
    },
  },
  scene: [PreloadScene, GameScene, EndScene],
};

export default Config;
