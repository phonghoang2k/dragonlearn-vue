import { Scene } from 'phaser'
import start from '@/game/game3/assets/start.png'
export default class Start_game3 extends Phaser.Scene {
  constructor () {
    super({ key: 'Start_game3'})
    
    
  }

  preload(){
    this.load.image('start',start)

  }


  create () {
    //this.stage.backgroundColor = "#71c5cf";
    this.start=this.add.image(500,300,'start').setInteractive();
    this.start.on('pointerdown',()=>{ this.scene.start('Scene3_game3')}) 
   
}
  
  update () {
   
}

}