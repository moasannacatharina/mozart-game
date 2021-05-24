const playLevel = (game, melodies) => {
  let songNames = Object.keys(melodies.melodies);
  if (
    !melodies.melodies[songNames[0]].isCompleted &&
    !melodies.melodies[songNames[1]].isCompleted &&
    game.level > 1
  ) {
    console.log(game.level);

    game.levelText.setText(`Level ${game.level}`);
    let btt = game.add
      .text(0, 0, `Level ${game.level}`, {
        fontSize: '32px',
        fontWeight: 'bold',
        fill: '#FFF',
      })
      .setOrigin(0.5);

    let container = game.add.container(400, 100, [btt]);

    game.physics.world.enableBody(container);

    container.body.setGravity(0, -25);
    container.body.setBounce(1, 1);
  }
  game.startText.setX(260);
  game.startText.setText('Play this melody');

  //   console.log(songNames);
  //   let songArray = Object.entries(melodies);

  //   const random = Math.floor(Math.random() * songNames.length);

  for (let i = 0; i < Object.keys(melodies.melodies).length; i++) {
    if (melodies.melodies[songNames[i]].isCompleted === false) {
      const songFunction = melodies.melodies[songNames[i]].melody;
      // console.log(melodies.melodies[songNames[i]].isCompleted);

      // play melody sequence animation
      songFunction(game);

      game.player.body.enable = false;
      game.player.setVisible();

      game.gameStart = false;
      game.startGame(game.gameStart);

      game.songName = songNames[i];

      melodies.melodies[songNames[i]].isCompleted = true;

      return game.songName;
    } else if (melodies.melodies[songNames[i]].isCompleted) {
      melodies.isCompleted = true;
      console.log(melodies.isCompleted);
    }
  }
};

export default playLevel;
