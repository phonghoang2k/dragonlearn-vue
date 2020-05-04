
import background from '@/game/game3/assets/sky.png'
import bomb from '@/game/game3/assets/ball.png'
import loa from '@/game/game3/assets/loa.png'
import Image2_game3 from '@/game/game3/assets/Image2_game3.png'
import Image1_game3 from '@/game/game3/assets/Image1_game3.png'
import thanh from '@/game/game3/assets/thanh2.png'
import thanhtren from '@/game/game3/assets/thanh.png'
import img1 from '@/game/game3/assets/50.png'
import img2 from '@/game/game3/assets/52.png'
import thudMp3 from '@/game/game3/assets/5.mp3'

import 'phaser'
import DragPlugin from 'phaser3-rex-plugins/plugins/drag-plugin.js';
import Drag from 'phaser3-rex-plugins/plugins/drag.js';


export default class Scene3_game3 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene3_game3' });
    this.isRun = false;
    this.result = true;
    this.isRunBall = true;
  }

  preload() {
    this.load.image('Image1_game3', Image1_game3)
    this.load.image('loa', loa)
    this.load.image('thanh', thanh)
    this.load.image('background', background)
    this.load.image('thanhtren', thanhtren)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3])
    this.load.image('cards', 'https://content.dragonlearn.in/111232/1134/63.png');
    this.load.image('bong', bomb)
    this.load.image('img1', img1)
    this.load.image('img2', img2)
  }

  create() {


    this.image();
    this.text();
    this.clickspeak();
    this.initScoreBoard();
    this.dragBar();
    //this.test();
    //hiệu ứng
    this.input.on('gameobjectover', function (pointer, gameObject) {
      gameObject.setTint(0x8EEDE2);

    })

    this.input.on('gameobjectout', function (pointer, gameObject) {
      gameObject.clearTint();
    })
    this.resultImg(this.result);

  }


  update() {
    if (this.isRun) {
      this.run();

    }
    if (this.img1.y == 360) {
      this.setRun(false);
      this.i2.destroy();
      this.i3.destroy();
     
      if (this.isRunBall) {
        this.runBall();
      }
      if (this.ball3.x == 700) {
        this.SetRunBall(false)

      }

    }
   
  }

  setRun(x) { this.isRun = x; }

  run() {
    this.img1.y++;
    this.img2.y--;
  }
  resultImg(result) {
    if (result == true) {
      this.img1 = this.add.image(400, 270, 'img1');
     this.i1.destroy();
      this.i4.destroy();
      this.img2 = this.add.image(580, 450, 'img2');
     this.setRun(true);
     
    }
  }
  runBall() {
    this.ball3.x+=2;
  }
  SetRunBall(x) { this.isRunBall = x }

  test() {
    var bong = this.add.sprite(300, 300, 'thanh').setInteractive();
    this.input.setDragState(bong);
    this.input.on('dragover', function (pointer, dragX, dragY) {
      gameObject.y = dragY;
    })

  }
  text() {
    this.questionUp = this.add.text(300, 100, 'Move the bar UP', { font: "50px Arial", fill: "back" });

    // this.down=this.add.text(530,100,"Down ",{font:"55px Adobe Gothic Std B",fill:"yellow"});
  }
  image() {

    this.i1=this.add.image(400, 270, 'Image1_game3')
    this.i2=this.add.image(400, 450, 'Image1_game3')
    this.i3=this.add.image(580, 270, 'Image1_game3')
    this.i4=this.add.image(580, 450, 'Image1_game3')
    this.add.image(230, 130, 'loa');
    this.add.image(480, 35, 'thanhtren');
    this.ball1 = this.add.image(250, 35, 'bomb');
    this.ball2 = this.add.image(280, 35, 'bomb');
    this.ball3 = this.add.image(310, 35, 'bomb');


    //this.add.image(490, 380, 'thanh')
    // this.add.image(315, 380, 'thanh')

  }
  clickspeak() {
    this.loa = this.add.image(230, 130, 'loa');
    this.audio = this.sound.add('thud');
    this.loa.setInteractive().on('pointerdown', () => {
      this.audio.play()
    })

  }
  initScoreBoard() {
    this.back = this.add.text(50, 20, "< Back", { color: '#6196FF', font: '26px Arial' });
    this.back.setInteractive().on('pointerdown', () => {
      window.location.href = '#/geometry'
    });

    

  }
 
  dragBar() {

    this.image = this.add.image(400, 360, 'cards').setInteractive();

    this.input.setDraggable(this.image);



    //  A drop zone
    var zone = this.add.zone(400, 200, 200, 200).setRectangleDropZone(200, 200);
    zone.input.dropZone = true;
    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

   
    this.input.on('dragstart', function (pointer, gameObject) {

      this.children.bringToTop(gameObject);

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.y = dragY;


    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {

      graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {

      gameObject.y = dropZone.y;


      // image.input.enabled = false;

    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {

      if (!dropped) {

        gameObject.y = gameObject.input.dragStartY;
      }

      graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    });
  }
}


