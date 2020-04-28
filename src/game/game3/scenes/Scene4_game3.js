import { Scene } from 'phaser'
import SliderPlugin from 'phaser3-rex-plugins/plugins/slider-plugin.js';
import Slider from 'phaser3-rex-plugins/plugins/slider.js';

/*export default class Scene4_game3 extends Phaser.Scene {
  constructor () {
    super({ key: 'Scene4_game3'})
    
    
  }


  create () {
   
    this.image();
    this.text();
    this.clickspeak();
    this.thanh = this.add.image(315, 380, 'thanh');
    this.thanh.slider = this.plugins.get('rexsliderplugin').add(this.thanh, {
        endPoints: [{
                x: this.thanh.x,
                y: this.thanh.y - 200
            },
            {
                x: this.thanh.x,
                y: this.thanh.y + 200
            }
        ],
        
    });

   
    this.cursorKeys = this.input.keyboard.createCursorKeys();
}
  //  To make the sprite move we need to enable Arcade Physics
  this.physics.startSystem(Phaser.Physics.Arcade);

  this.sprite = this.add.sprite(315, 380, 'thanh');
  this.sprite.anchor.set(0.5);

  //  And enable the Sprite to have a physics body:
   this.physics.arcade.enable(this.sprite);
   this.cursorKeys = this.input.keyboard.createCursorKeys();

  
  
  update () {
   
}

text() {
  this.question=this.add.text(220,100,'Move the bar',{font:"50px Arial",fill:"yellow"});
  this.up=this.add.text(530,100,"Up ",{font:"55px Adobe Gothic Std B",fill:"yellow"});
 // this.down=this.add.text(530,100,"Down ",{font:"55px Adobe Gothic Std B",fill:"yellow"});
}
image(){
  this.add.image(400, 300, 'sky')
   
  this.add.image(315, 280, 'Image1_game3')
  this.add.image(315, 480, 'Image1_game3')
  this.add.image(490, 280, 'Image1_game3')
  this.add.image(490, 480, 'Image1_game3')
  this.loa=this.add.image(170,130,'loa')
  this.add.image(490, 380, 'thanh')
  this.add.image(315, 380, 'thanh')
  this.sound.add('thud')
}
clickspeak(){
  
  this.sound.play('thud',{volume:1})

}

questionUp(){
  if (this.question='Up'){

  }
  else {
    
  }
}


*/