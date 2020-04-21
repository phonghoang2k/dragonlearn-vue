import Phaser from 'phaser';
import background from '@/game/identifythedirection/assets/background.png'
import tree from '../assets/tree.png';
import bug from '../assets/bug-up.png';
import ok from '../assets/ok.png';
import ok_red from '../assets/ok-red.png';
import ok_green from '../assets/ok-green.png';


export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  preload() {
    this.load.image('background', background);
    this.load.image('ok', ok);
    this.load.image('ok-red', ok_red);
    this.load.image('ok-green', ok_green);
    this.load.image('tree', tree);
    this.load.image('bug', bug);
  }

  create() {
    this.scene.start('Scene1')
  }
}
