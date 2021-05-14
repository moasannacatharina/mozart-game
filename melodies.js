import { keys } from '/game.js';
import * as Tone from 'tone';
const synth = new Tone.Synth().toDestination();

const myMelodies = {
  buyHotDog: () => {
    setTimeout(function () {
      keys.children.entries[5].anims.play('pressed', true);
      keys.children.entries[5].setTint(0x7dcea0);
      synth.triggerAttackRelease('A4', '4n');

      setTimeout(function () {
        keys.children.entries[5].anims.play('notpressed', true);
        keys.children.entries[5].setTint(0xffffff);
      }, 500);
    }, 2000);
    setTimeout(function () {
      keys.children.entries[4].anims.play('pressed', true);
      keys.children.entries[4].setTint(0x7dcea0);
      synth.triggerAttackRelease('G4', '4n');

      setTimeout(function () {
        keys.children.entries[4].anims.play('notpressed', true);

        keys.children.entries[4].setTint(0xffffff);
      }, 500);
    }, 3000);
    setTimeout(function () {
      keys.children.entries[3].anims.play('pressed', true);
      keys.children.entries[3].setTint(0x7dcea0);
      synth.triggerAttackRelease('F4', '4n');

      setTimeout(function () {
        keys.children.entries[3].anims.play('notpressed', true);
        keys.children.entries[3].setTint(0xffffff);
      }, 500);
    }, 4000);
  },
  lilleKatt: () => {
    setTimeout(function () {
      keys.children.entries[0].anims.play('pressed', true);

      keys.children.entries[0].anims.playAfterDelay('notpressed', 500);

      keys.children.entries[0].setTint(0x7dcea0);
      synth.triggerAttackRelease('C4', '4n');

      setTimeout(function () {
        keys.children.entries[0].setTint(0xffffff);
      }, 500);
    }, 2000);
    setTimeout(function () {
      keys.children.entries[1].anims.play('pressed', true);
      keys.children.entries[1].setTint(0x7dcea0);
      synth.triggerAttackRelease('D4', '4n');

      setTimeout(function () {
        keys.children.entries[1].anims.play('notpressed', true);

        keys.children.entries[1].setTint(0xffffff);
      }, 500);
    }, 3000);
    setTimeout(function () {
      keys.children.entries[2].anims.play('pressed', true);
      keys.children.entries[2].setTint(0x7dcea0);
      synth.triggerAttackRelease('E4', '4n');

      setTimeout(function () {
        keys.children.entries[2].anims.play('notpressed', true);
        keys.children.entries[2].setTint(0xffffff);
      }, 500);
    }, 4000);
  },
};

export { myMelodies };
