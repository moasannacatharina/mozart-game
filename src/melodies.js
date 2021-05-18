import { GameScene } from './GameScene';
import * as Tone from 'tone';
const synth = new Tone.Synth().toDestination();

// console.log(GameScene);
// let game = new GameScene();
const levelOneMelodies = {
  buyHotDog: () => {
    setTimeout(function () {
      game.keys.children.entries[5].anims.play('pressed', true);
      game.keys.children.entries[5].setTint(0x7dcea0);
      synth.triggerAttackRelease('A4', '4n');

      setTimeout(function () {
        game.keys.children.entries[5].anims.play('notpressed', true);
        game.keys.children.entries[5].setTint(0xffffff);
      }, 500);
    }, 2000);
    setTimeout(function () {
      game.keys.children.entries[4].anims.play('pressed', true);
      game.keys.children.entries[4].setTint(0x7dcea0);
      synth.triggerAttackRelease('G4', '4n');

      setTimeout(function () {
        game.keys.children.entries[4].anims.play('notpressed', true);

        game.keys.children.entries[4].setTint(0xffffff);
      }, 500);
    }, 3000);
    setTimeout(function () {
      game.keys.children.entries[3].anims.play('pressed', true);
      game.keys.children.entries[3].setTint(0x7dcea0);
      synth.triggerAttackRelease('F4', '4n');

      setTimeout(function () {
        game.keys.children.entries[3].anims.play('notpressed', true);
        game.keys.children.entries[3].setTint(0xffffff);
      }, 500);
    }, 4000);
  },
  lilleKatt: () => {
    setTimeout(function () {
      game.keys.children.entries[0].anims.play('pressed', true);

      game.keys.children.entries[0].anims.playAfterDelay('notpressed', 500);

      game.keys.children.entries[0].setTint(0x7dcea0);
      synth.triggerAttackRelease('C4', '4n');

      setTimeout(function () {
        game.keys.children.entries[0].setTint(0xffffff);
      }, 500);
    }, 2000);
    setTimeout(function () {
      game.keys.children.entries[1].anims.play('pressed', true);
      game.keys.children.entries[1].setTint(0x7dcea0);
      synth.triggerAttackRelease('D4', '4n');

      setTimeout(function () {
        game.keys.children.entries[1].anims.play('notpressed', true);

        game.keys.children.entries[1].setTint(0xffffff);
      }, 500);
    }, 3000);
    setTimeout(function () {
      game.keys.children.entries[2].anims.play('pressed', true);
      game.keys.children.entries[2].setTint(0x7dcea0);
      synth.triggerAttackRelease('E4', '4n');

      setTimeout(function () {
        game.keys.children.entries[2].anims.play('notpressed', true);
        game.keys.children.entries[2].setTint(0xffffff);
      }, 500);
    }, 4000);
  },
};

const levelTwoMelodies = {};

const sequences = {
  lilleKatt: 'piano-0piano-1piano-2',
  buyHotDog: 'piano-5piano-4piano-3',
};

export { levelOneMelodies, levelTwoMelodies, sequences };
