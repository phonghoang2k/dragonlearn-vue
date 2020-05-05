import Phaser from 'phaser';
import background from '@/game/moveobjectupordown/assets/background.png'
import flag from '../assets/flag.png';
import yellow_flag from '../assets/23.png';
// import ok from '../assets/ok.png';
// import ok_red from '../assets/ok-red.png';
// import ok_green from '../assets/ok-green.png';
import arrow_up from '../assets/arrow-up.png';
import arrow_down from '../assets/arrow-down.png';
import point from '../assets/ball (2).png';
import bar from '../assets/bar.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  preload() {
    this.load.image('background', background);
    // this.load.image('ok', ok);
    // this.load.image('ok-red', ok_red);
    // this.load.image('ok-green', ok_green);
    this.load.image('flag', flag);
    this.load.image('yellow_flag', yellow_flag);
    this.load.image('arrow_up', arrow_up);
    this.load.image('arrow_down',arrow_down);
    this.load.image('point',point);
    this.load.image('bar',bar);
  }

  create() {
    this.scene.start('Scene1')
  }
}
