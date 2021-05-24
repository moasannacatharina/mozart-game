import * as Tone from 'tone';
const synth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: 'triangle',
  },
}).toDestination();

const levels = [
  {
    isCompleted: false,
    melodies: {
      buyHotDog: {
        isCompleted: false,
        melody: (game) => {
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
      },
      lilleKatt: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);

            game.keys.children.entries[0].anims.playAfterDelay(
              'notpressed',
              500
            );

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
      },
    },
  },
  {
    isCompleted: false,
    melodies: {
      something: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);

            game.keys.children.entries[0].anims.playAfterDelay(
              'notpressed',
              500
            );

            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '4n');

            setTimeout(function () {
              game.keys.children.entries[0].setTint(0xffffff);
            }, 500);
          }, 2000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '4n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);

              game.keys.children.entries[2].setTint(0xffffff);
            }, 500);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 500);
          }, 4000);
        },
      },
      ekot: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[6].anims.play('pressed', true);

            game.keys.children.entries[6].anims.playAfterDelay(
              'notpressed',
              500
            );

            game.keys.children.entries[6].setTint(0x7dcea0);
            synth.triggerAttackRelease('B4', '4n');

            setTimeout(function () {
              game.keys.children.entries[6].setTint(0xffffff);
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
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 500);
          }, 4000);
        },
      },
    },
  },
  {
    isCompleted: false,
    melodies: {
      soundOfSilence: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);

            game.keys.children.entries[1].anims.playAfterDelay(
              'notpressed',
              100
            );

            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].setTint(0xffffff);
            }, 100);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);

            game.keys.children.entries[1].anims.playAfterDelay(
              'notpressed',
              100
            );

            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].setTint(0xffffff);
            }, 100);
          }, 1400);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);

              game.keys.children.entries[3].setTint(0xffffff);
            }, 100);
          }, 1800);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);

              game.keys.children.entries[3].setTint(0xffffff);
            }, 100);
          }, 2200);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '4n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);
              game.keys.children.entries[5].setTint(0xffffff);
            }, 100);
          }, 2600);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '4n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);
              game.keys.children.entries[5].setTint(0xffffff);
            }, 100);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 3400);
        },
      },
      gubbenNoak: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);

            game.keys.children.entries[0].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '8n');

            setTimeout(function () {
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);

            game.keys.children.entries[0].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '8n');

            setTimeout(function () {
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 1500);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);

            game.keys.children.entries[0].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '8n');

            setTimeout(function () {
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 2000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '8n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);

              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 2500);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 3500);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 4000);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '8n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 4500);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '8n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 5000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '8n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 5500);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 6000);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 6500);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);
            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '4n');

            setTimeout(function () {
              game.keys.children.entries[0].anims.play('notpressed', true);
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 7000);
        },
      },
    },
  },
  {
    isCompleted: false,
    melodies: {
      indianaJones: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '8n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '16n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);

              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 1500);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 1600);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 2000);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '16n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 3500);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 3600);
        },
      },
      jönssonLigan: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);

            game.keys.children.entries[3].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '8n');

            setTimeout(function () {
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '8n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);

              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 1250);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '8n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 1500);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 1750);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 2250);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);

            game.keys.children.entries[3].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 2500);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);

              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 2750);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 3250);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 3750);
          setTimeout(function () {
            game.keys.children.entries[6].anims.play('pressed', true);
            game.keys.children.entries[6].setTint(0x7dcea0);
            synth.triggerAttackRelease('B4', '4n');

            setTimeout(function () {
              game.keys.children.entries[6].anims.play('notpressed', true);
              game.keys.children.entries[6].setTint(0xffffff);
            }, 250);
          }, 4000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 150);
          }, 4500);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 150);
          }, 4750);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 5250);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 5500);
        },
      },
    },
  },
  {
    isCompleted: false,
    melodies: {
      liveTomorrow: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);

            game.keys.children.entries[3].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '8n');

            setTimeout(function () {
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '8n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);

              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 1250);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '8n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 1500);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '4n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);
              game.keys.children.entries[5].setTint(0xffffff);
            }, 250);
          }, 2000);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 2500);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);

            game.keys.children.entries[1].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '2n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);

              game.keys.children.entries[5].setTint(0xffffff);
            }, 250);
          }, 3300);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 4000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '4n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 5000);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 5250);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '4n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 5500);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 150);
          }, 6000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '4n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 150);
          }, 6500);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '4n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 250);
          }, 7000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '1n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 7250);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '4n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 250);
          }, 8000);
        },
      },
      policeAcademy: {
        isCompleted: false,
        melody: (game) => {
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);

            game.keys.children.entries[4].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '8n');

            setTimeout(function () {
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 1000);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);
            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '8n');

            setTimeout(function () {
              game.keys.children.entries[0].anims.play('notpressed', true);

              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 1500);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '8n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 1800);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);
            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '4n');

            setTimeout(function () {
              game.keys.children.entries[0].anims.play('notpressed', true);
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 2000);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '4n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 2500);
          setTimeout(function () {
            game.keys.children.entries[6].anims.play('pressed', true);

            game.keys.children.entries[6].anims.playAfterDelay(
              'notpressed',
              250
            );

            game.keys.children.entries[6].setTint(0x7dcea0);
            synth.triggerAttackRelease('B4', '4n');

            setTimeout(function () {
              game.keys.children.entries[6].setTint(0xffffff);
            }, 250);
          }, 3000);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '4n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);

              game.keys.children.entries[5].setTint(0xffffff);
            }, 250);
          }, 3500);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 4000);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 4700);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 4850);
          setTimeout(function () {
            game.keys.children.entries[5].anims.play('pressed', true);
            game.keys.children.entries[5].setTint(0x7dcea0);
            synth.triggerAttackRelease('A4', '16n');

            setTimeout(function () {
              game.keys.children.entries[5].anims.play('notpressed', true);
              game.keys.children.entries[5].setTint(0xffffff);
            }, 250);
          }, 5050);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 5200);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 5350);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '16n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 100);
          }, 5500);
          setTimeout(function () {
            game.keys.children.entries[7].anims.play('pressed', true);
            game.keys.children.entries[7].setTint(0x7dcea0);
            synth.triggerAttackRelease('C5', '16n');

            setTimeout(function () {
              game.keys.children.entries[7].anims.play('notpressed', true);
              game.keys.children.entries[7].setTint(0xffffff);
            }, 250);
          }, 5800);
          setTimeout(function () {
            game.keys.children.entries[4].anims.play('pressed', true);
            game.keys.children.entries[4].setTint(0x7dcea0);
            synth.triggerAttackRelease('G4', '4n');

            setTimeout(function () {
              game.keys.children.entries[4].anims.play('notpressed', true);
              game.keys.children.entries[4].setTint(0xffffff);
            }, 250);
          }, 6000);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '16n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 100);
          }, 6700);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '16n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 100);
          }, 6850);
          setTimeout(function () {
            game.keys.children.entries[3].anims.play('pressed', true);
            game.keys.children.entries[3].setTint(0x7dcea0);
            synth.triggerAttackRelease('F4', '16n');

            setTimeout(function () {
              game.keys.children.entries[3].anims.play('notpressed', true);
              game.keys.children.entries[3].setTint(0xffffff);
            }, 100);
          }, 7000);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '16n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 100);
          }, 7150);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '16n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 100);
          }, 7300);
          setTimeout(function () {
            game.keys.children.entries[2].anims.play('pressed', true);
            game.keys.children.entries[2].setTint(0x7dcea0);
            synth.triggerAttackRelease('E4', '16n');

            setTimeout(function () {
              game.keys.children.entries[2].anims.play('notpressed', true);
              game.keys.children.entries[2].setTint(0xffffff);
            }, 100);
          }, 7450);
          setTimeout(function () {
            game.keys.children.entries[0].anims.play('pressed', true);
            game.keys.children.entries[0].setTint(0x7dcea0);
            synth.triggerAttackRelease('C4', '4n');

            setTimeout(function () {
              game.keys.children.entries[0].anims.play('notpressed', true);
              game.keys.children.entries[0].setTint(0xffffff);
            }, 250);
          }, 7800);
          setTimeout(function () {
            game.keys.children.entries[1].anims.play('pressed', true);
            game.keys.children.entries[1].setTint(0x7dcea0);
            synth.triggerAttackRelease('D4', '4n');

            setTimeout(function () {
              game.keys.children.entries[1].anims.play('notpressed', true);
              game.keys.children.entries[1].setTint(0xffffff);
            }, 250);
          }, 7950);
        },
      },
    },
  },
];

const sequences = {
  lilleKatt: ['piano-0', 'piano-1', 'piano-2'],
  buyHotDog: ['piano-5', 'piano-4', 'piano-3'],
  something: ['piano-0', 'piano-2', 'piano-4'],
  ekot: ['piano-6', 'piano-1', 'piano-4'],
  soundOfSilence: [
    'piano-1',
    'piano-1',
    'piano-3',
    'piano-3',
    'piano-5',
    'piano-5',
    'piano-4',
  ],
  gubbenNoak: [
    'piano-0',
    'piano-0',
    'piano-0',
    'piano-2',
    'piano-1',
    'piano-1',
    'piano-1',
    'piano-3',
    'piano-2',
    'piano-2',
    'piano-1',
    'piano-1',
    'piano-0',
  ],
  indianaJones: [
    'piano-2',
    'piano-3',
    'piano-4',
    'piano-7',
    'piano-1',
    'piano-2',
    'piano-3',
  ],
  jönssonLigan: [
    'piano-3',
    'piano-4',
    'piano-3',
    'piano-7',
    'piano-7',
    'piano-3',
    'piano-4',
    'piano-3',
    'piano-7',
    'piano-7',
    'piano-6',
    'piano-4',
    'piano-4',
    'piano-1',
    'piano-4',
  ],
  liveTomorrow: [
    'piano-3',
    'piano-2',
    'piano-3',
    'piano-5',
    'piano-3',
    'piano-1',
    'piano-5',
    'piano-4',
    'piano-2',
    'piano-1',
    'piano-2',
    'piano-4',
    'piano-2',
    'piano-2',
    'piano-4',
    'piano-3',
  ],
  policeAcademy: [
    'piano-4',
    'piano-0',
    'piano-1',
    'piano-0',
    'piano-7',
    'piano-6',
    'piano-5',
    'piano-4',
    'piano-4',
    'piano-4',
    'piano-5',
    'piano-4',
    'piano-4',
    'piano-4',
    'piano-7',
    'piano-4',
    'piano-3',
    'piano-3',
    'piano-3',
    'piano-2',
    'piano-2',
    'piano-2',
    'piano-0',
    'piano-1',
  ],
};

export { levels, sequences };
