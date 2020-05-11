
import background from '@/game/game3/assets/sky.png'
import bomb from '@/game/game3/assets/ball.png'
import loa from '@/game/game3/assets/loa.png'
import Image1_game3 from '@/game/game3/assets/Image1_game3.png'
import thanh from '@/game/game3/assets/thanh2.png'
import thanhtren from '@/game/game3/assets/thanh.png'
import img1 from '@/game/game3/assets/50.png'
import img2 from '@/game/game3/assets/52.png'
import thudMp3 from '@/game/game3/assets/5.mp3'
import thu7 from '@/game/game3/assets/7.mp3'
import wrong from '@/game/game3/assets/47.png'
import yellow from '@/game/game3/assets/45.png'
import 'phaser'


export default class Scene3_game3 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene3_game3' });
    this.isRun = false;
    // this.setRun=false;
    this.isRunBall = true;
    this.answer = 'UP';
  }

  preload() {
    this.load.image('Image1_game3', Image1_game3)
    this.load.image('loa', loa)
    this.load.image('thanh', thanh)
    this.load.image('background', background)
    this.load.image('thanhtren', thanhtren)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3])
    this.load.audio('thu7', [thu7])
    this.load.image('cards', 'https://content.dragonlearn.in/111232/1134/63.png');
    this.load.image('bong', bomb)
    this.load.image('img1', img1)
    this.load.image('img2', img2)
    this.load.image('wrong', wrong)
    this.load.image('yellow', yellow)
  }

  create() {

    this.initScoreBoard();
    this.setRun(false);

    this.SetRunBall(false);
    this.image();
    this.thanh2 = this.add.image(580, 370, 'cards');
    this.img1 = this.add.image(400, 270, 'img1');
    this.img2 = this.add.image(580, 450, 'img2');
    this.initButton1();
    this.initButton2();


    this.thanh1 = this.add.image(400, 360, 'cards');

    // hiệu ứng
    /* this.input.on('gameobjectover', function (pointer, gameObject) {
       gameObject.setTint(0x8EEDE2);
 
     })
     this.input.on('gameobjectout', function (pointer, gameObject) {
       gameObject.clearTint();
     })*/
    //this.scene.start('Scene4_game3')
   
  }



  update() {


    if (this.isRunBar1) {
      this.runBar1();
    }
    if (this.thanh1.y == 190) {
      this.setRunBar1(false);
    }

    if (this.isRunBar2) {

      this.runBar2();
    }
    if (this.thanh2.y == 530) {
      this.setRunBar2(false);
    }


    if (this.isRun) {
      this.run();

    }
    if (this.img1.y == 360) {
      this.setRun(false);
      this.down.destroy();
      this.textRs();

      if (this.isRunBall) {
        this.runBall();
      }

      if (this.ball3.x == 700) {
        this.SetRunBall(false);
      // this.scene.remove('Scene3_game3');
        this.scene.start("Scene4_game3");
      }
    }
  }
  textRs() {
    this.add.text(400, 100, "You got it", { font: "50px Arial", fill: "back" });
  }
  setRun(x) {

    this.isRun = x;
  }

  run() {
    this.img1.y++;
    this.img2.y--;
  }

  runBall() {
    this.ball3.x += 3;
  }
  SetRunBall(x) { this.isRunBall = x }
  runBar1() {
    this.thanh1.y -= 2;
  }
  setRunBar1(x) { this.isRunBar1 = x }
  runBar2() { this.thanh2.y += 2 }
  setRunBar2(x) { this.isRunBar2 = x }


  test() {
    var bong = this.add.sprite(300, 300, 'thanh').setInteractive();
    this.input.setDragState(bong);
    this.input.on('dragover', function (pointer, dragX, dragY) {
      gameObject.y = dragY;
    })

  }

  image() {

    // this.add.image(230, 130, 'loa');
    this.add.image(480, 35, 'thanhtren');
    this.ball1 = this.add.image(250, 35, 'bomb');
    this.ball2 = this.add.image(280, 35, 'bomb');
    this.ball3 = this.add.image(310, 35, 'bomb');
    this.i3 = this.add.sprite(580, 270, 'Image1_game3');
    this.i4 = this.add.sprite(580, 450, 'Image1_game3');

    this.i1 = this.add.sprite(400, 270, 'Image1_game3');
    this.i2 = this.add.sprite(400, 450, 'Image1_game3');



  }
  destroyObject() {
    for (let index = 0; index < arguments.length; index++) {
      arguments[index].setActive(false).setVisible(false);
    }
  }
  setObjectVisible(isVisible) {
    for (let index = 1; index < arguments.length; index++) {
      arguments[index].setVisible(isVisible);
    }
  }

  clickspeak1() {
    this.up = this.add.text(300, 100, "Move the bar UP", { font: "50px Arial", fill: "back" });
    this.loa = this.add.image(230, 130, 'loa');
    this.audio = this.sound.add('thud');
    this.loa.setInteractive().on('pointerdown', () => {
      this.audio.play()
    })

  }
  clickspeak2() {
    this.thanh2 = this.add.image(580, 360, 'cards')
    this.down = this.add.text(300, 100, "Move the bar DOWN", { font: "50px Arial", fill: "back" });
    this.loa = this.add.image(230, 130, 'loa');
    this.audio = this.sound.add('thu7');
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

  initButton1() {

    this.clickspeak1();

    this.setObjectVisible(this.thanh)
    this.ii1 = this.add.sprite(400, 270, 'Image1_game3');
    this.ii2 = this.add.sprite(400, 450, 'Image1_game3');

    this.ii1.setInteractive().on('pointerdown', this.chooseTheAnswerUp, this);
    this.ii2.setInteractive().on('pointerdown', this.chooseTheAnswerDown, this);
  }

  chooseTheAnswerUp() {
    // this.ii1.destroy();
    //this.yellow=this.add.image(400,270,'yellow');
    //this.thanh1.setMask(mask);
    this.setRunBar1(true);

    setTimeout(() => {
      this.ii1.destroy();
      this.img11 = this.add.image(400, 270, 'img1');

      this.destroyObject(this.up, this.ii2, this.thanh1, this.loa);
    }, 1500);

    setTimeout(() => {
      this.clickspeak2();
    }, 2500);


  }

  chooseTheAnswerDown() {
    this.ii2.setTexture('wrong');

    setTimeout(() => this.ii2.setTexture('Image1_game3'), 1000);
  }

  initButton2() {
    this.ii3 = this.add.sprite(580, 270, 'Image1_game3');
    this.ii4 = this.add.sprite(580, 450, 'Image1_game3');

    this.ii3.setInteractive().on('pointerdown', this.chooseTheAnswerUp2, this);
    this.ii4.setInteractive().on('pointerdown', this.chooseTheAnswerDown2, this);
  }

  chooseTheAnswerUp2() {

    this.ii3.setTexture('wrong');
    setTimeout(() => { this.ii3.setTexture('Image1_game3') }, 700);

  }
  chooseTheAnswerDown2() {

    this.setRunBar2(true)
    setTimeout(() => {
      this.ii4.destroy();
      this.img22 = this.add.image(580, 450, 'img2');
      this.thanh2.destroy();
    }, 1500)


    setTimeout(() => {
      this.destroyObject(this.ii3, this.img11, this.img22, this.thanh2);

      this.setRun(true);
      this.SetRunBall(true);
      this.setObjectVisible(this.i1, this.i2, this.i3, this.i4);
      this.destroyObject(this.i1, this.i2, this.i3, this.i4, this.down, this.loa);
     
    }, 2500)
   
  }

  chooseTheAnswerUp2() {

    this.ii3.setTexture('wrong');

    setTimeout(() => this.ii3.setTexture('Image1_game3'), 1000);

  }



  /*dragBar() {

    this.image = this.add.sprite(400, 360, 'cards').setInteractive();

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
  }*/
}


