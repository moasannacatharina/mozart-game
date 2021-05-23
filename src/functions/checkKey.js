const checkKey = (game, key, sequences, restart, levels) => {
  if (key.name === sequences[game.songName][game.numberOfCollisions]) {
    // console.log(key.name, sequences[game.songName][game.numberOfCollisions]);
    key.setTint(0x7dcea0);
  } else {
    console.log('WRONG');
    key.setTint(0xff0000);
    key.anims.play('pressed', true);

    let failText = game.add.text(0, 0, 'OH NO! You failed!', {
      fontSize: '50px',
      fill: '#FFF',
    });

    let container = game.add.container(150, 100, [failText]);
    game.physics.world.enableBody(container);
    container.body.setAllowGravity(false);

    setTimeout(() => {
      game.physics.pause();
    }, 1000);

    let button = game.add.sprite(400, 280, 'button');
    button.inputEnabled = true;
    button
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => restart(game, levels));
  }
};

export default checkKey;
