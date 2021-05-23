class Keys {
  constructor(game) {
    this.game = game;
  }

  preload() {
    this.game.load.spritesheet('pianokey', '/pianokey.png', {
      frameWidth: 100,
      frameHeight: 125,
    });
  }

  create() {
    this.game.keys = this.game.physics.add.group({
      key: 'pianokey',
      repeat: 7,
      name: 'hello world',
      setXY: { x: 55, y: 475, stepX: 98 },
    });

    this.game.keys.children.entries.map(
      (item, i) => (item.name = 'piano-' + i)
    );

    this.game.anims.create({
      key: 'notpressed',
      frames: this.game.anims.generateFrameNumbers('pianokey', {
        start: 0,
        end: 0,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.game.anims.create({
      key: 'pressed',
      frames: this.game.anims.generateFrameNumbers('pianokey', {
        start: 1,
        end: 0,
      }),
      frameRate: 0,
      repeat: 0,
    });
  }
}

export default Keys;
