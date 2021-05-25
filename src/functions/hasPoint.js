const hasPoint = (game, userInput, target) => {
  if (userInput == target) return true;
  if (userInput == null || target == null) return false;
  if (userInput.length !== target.length) return false;

  for (var i = 0, l = target.length; i < l; i++) {
    if (target[i] instanceof Array && userInput[i] instanceof Array) {
      if (!target[i].equals(userInput[i])) {
        return false;
      }
    } else if (target[i] != userInput[i]) {
      return false;
    }
  }

  game.score += 10;
  game.scoreText.setText('Score: ' + game.score);
  return true;
  // const str = userInput.join('');

  // if (str.includes(target)) {
  //   this.score += 10;
  //   this.scoreText.setText('Score: ' + this.score);
  // }

  // return str.includes(target);
};

export default hasPoint;
