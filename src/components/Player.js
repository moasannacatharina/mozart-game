class Player {
  constructor(game) {
    this.game = game;
  }

  preload() {
    this.game.load.spritesheet('dude', '/composerdude-middle.png', {
      frameWidth: 48,
      frameHeight: 72,
    });
  }

  create() {
    this.game.player = this.game.physics.add.sprite(400, 0, 'dude');
    this.game.player.setCollideWorldBounds(true);

    this.game.anims.create({
      key: 'left',
      frames: this.game.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.game.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.game.anims.create({
      key: 'right',
      frames: this.game.anims.generateFrameNumbers('dude', {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export default Player;
