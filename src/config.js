import Phaser from 'phaser';
import PreloadScene from './PreloadScene';
import { GameScene } from './GameScene';

const Config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [PreloadScene, GameScene],
};

export default Config;
