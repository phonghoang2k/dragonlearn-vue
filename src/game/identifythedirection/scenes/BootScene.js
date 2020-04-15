import { Scene } from 'phaser'
import background from '@/game/identifythedirection/assets/background.png'


export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  preload() {
    this.load.image('background', background)
  }

  create() {
    this.scene.start('Scene1')
  }
}
