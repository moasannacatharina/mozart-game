import Player from '../components/Player';
import Keys from '../components/Keys';

const restart = (game, levels) => {
  game.player = new Player(game);
  game.keys = new Keys(game);
  game.numberOfCollisions = 0;
  game.score = 0;
  game.playedSequence = [];
  game.level = 1;
  game.scene.start('game');
  game.gameStart = true;

  for (let i = 0; i < levels.length; i++) {
    let songNames = Object.keys(levels[i].melodies);
    for (let y = 0; y < Object.keys(levels[i].melodies).length; y++) {
      levels[i].melodies[songNames[y]].isCompleted = false;
    }
    levels[i].isCompleted = false;
  }
};
export default restart;
