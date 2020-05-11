
import background from '@/game/game3/assets/sky.png'
import bomb from '@/game/game3/assets/ball.png'
import loa from '@/game/game3/assets/loa.png'
import Image1_game3t from '@/game/game3/assets/37.png'
import thanht from '@/game/game3/assets/61.png'
import thanhtren from '@/game/game3/assets/thanh.png'
import img1t from '@/game/game3/assets/53t.png'
import img2t from '@/game/game3/assets/55.png'
import img3 from '@/game/game3/assets/56.png'
import img4 from '@/game/game3/assets/57.png'
import img5 from '@/game/game3/assets/58t.png'
import img6 from '@/game/game3/assets/59.png'
import img7 from '@/game/game3/assets/60.png'

import img8 from '@/game/game3/assets/62.png'
import img9 from '@/game/game3/assets/63.png'
import img10 from '@/game/game3/assets/64.png'
import thudMp3 from '@/game/game3/assets/5.mp3'
import thu7 from '@/game/game3/assets/7.mp3'
import wrong from '@/game/game3/assets/39.png'
import yellow from '@/game/game3/assets/45.png'
import 'phaser'


export default class Scene4_game3 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene4_game3' });
    this.isRun = false;
    // this.setRun=false;
    this.isRunBall = true;
    this.answer = 'UP';
  }

  preload() {
    this.load.image('Image1_game3t', Image1_game3t)
    this.load.image('loa', loa)
    this.load.image('thanht', thanht)
    this.load.image('background', background)
    this.load.image('thanhtren', thanhtren)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3])
    this.load.audio('thu7', [thu7])

    this.load.image('bong', bomb)
    this.load.image('img1t', img1t)
    this.load.image('img2t', img2t)
    this.load.image('img3', img3)
    this.load.image('img4', img4)
    this.load.image('img5', img5)
    this.load.image('img6', img6)
    this.load.image('img7', img7)
    this.load.image('img8', img8)
    this.load.image('img9', img9)
    this.load.image('img10', img10)
    this.load.image('wrong', wrong)
    this.load.image('yellow', yellow)
  }

  create() {

    this.initScoreBoard();
    this.thanh2 = this.add.image(670, 370, 'thanht');
    this.thanh3 = this.add.image(320, 360, 'thanht');
    this.thanh4 = this.add.image(390, 360, 'thanht');
    this.thanh5 = this.add.image(740, 360, 'thanht');
    this.thanh6 = this.add.image(250, 360, 'thanht');
    this.thanh7 = this.add.image(460, 360, 'thanht');
    this.thanh8 = this.add.image(530, 360, 'thanht');
    this.thanh9 = this.add.image(600, 360, 'thanht');
    this.thanh10 = this.add.image(810, 360, 'thanht');
    this.setRun(false);

    this.SetRunBall(false);
    this.image();


    this.img1 = this.add.image(180, 270, 'img1t');
    this.img2 = this.add.image(250, 450, 'img2t');
    this.img3 = this.add.image(320, 270, 'img3');
    this.img4 = this.add.image(390, 450, 'img4');
    this.img5 = this.add.image(460, 270, 'img5');
    this.img6 = this.add.image(530, 450, 'img6');
    this.img7 = this.add.image(600, 270, 'img7');
    this.img8 = this.add.image(670, 450, 'img8');
    this.img9 = this.add.image(740, 270, 'img9');
    this.img10 = this.add.image(810, 450, 'img10');



    this.initButton10();
    this.initButton9();
    this.initButton8();
    this.initButton7();
    this.initButton6();
    this.initButton5();
    this.initButton4();
    this.initButton3();

    this.initButton2();
    this.initButton1();



    this.thanh1 = this.add.image(180, 360, 'thanht');

    // hiệu ứng
    /* this.input.on('gameobjectover', function (pointer, gameObject) {
       gameObject.setTint(0x8EEDE2);
 
     })
     this.input.on('gameobjectout', function (pointer, gameObject) {
       gameObject.clearTint();
     })*/

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
    if (this.isRunBar3) {
      this.runBar3();
    }
    if (this.thanh3.y == 190) {
      this.setRunBar3(false);
    }
    if (this.isRunBar4) {

      this.runBar4();
    }
    if (this.thanh4.y == 530) {
      this.setRunBar4(false);
    }
    if (this.isRunBar5) {
      this.runBar5();
    }
    if (this.thanh5.y == 190) {
      this.setRunBar3(false);
    }
    if (this.isRunBar6) {

      this.runBar6();
    }
    if (this.thanh6.y == 530) {
      this.setRunBar6(false);
    }
    if (this.isRunBar7) {
      this.runBar7();
    }
    if (this.thanh7.y == 190) {
      this.setRunBar7(false);
    }
    if (this.isRunBar8) {

      this.runBar8();
    }
    if (this.thanh8.y == 530) {
      this.setRunBar8(false);
    }

    if (this.isRunBar9) {
      this.runBar9();
    }
    if (this.thanh9.y == 190) {
      this.setRunBar9(false);
    }
    if (this.isRunBar10) {

      this.runBar10();
    }
    if (this.thanh10.y == 530) {
      this.setRunBar10(false);
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
      if (this.ball2.x == 600) {
        this.SetRunBall(false);
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
    this.img3.y++;
    this.img4.y--;
    this.img5.y++;
    this.img6.y--;
    this.img7.y++;
    this.img8.y--;
    this.img9.y++;
    this.img10.y--;


  }

  runBall() {
    this.ball2.x += 3;
  }
  SetRunBall(x) { this.isRunBall = x }
  runBar1() {
    this.thanh1.y -= 2;
  }
  setRunBar1(x) { this.isRunBar1 = x }
  runBar2() { this.thanh2.y += 2 }
  setRunBar2(x) { this.isRunBar2 = x }
  runBar3() { this.thanh3.y -= 2 }
  setRunBar3(x) { this.isRunBar3 = x }
  runBar4() { this.thanh4.y += 2 }
  setRunBar4(x) { this.isRunBar4 = x }
  runBar5() { this.thanh5.y -= 2 }
  setRunBar5(x) { this.isRunBar5 = x }
  runBar6() { this.thanh6.y += 2 }
  setRunBar6(x) { this.isRunBar6 = x }
  runBar7() { this.thanh7.y -= 2 }
  setRunBar7(x) { this.isRunBar7 = x }
  runBar8() { this.thanh8.y += 2 }
  setRunBar8(x) { this.isRunBar8 = x }
  runBar9() { this.thanh9.y -= 2 }
  setRunBar9(x) { this.isRunBar9 = x }
  runBar10() { this.thanh10.y += 2 }
  setRunBar10(x) { this.isRunBar10 = x }
  image() {

    // this.add.image(230, 130, 'loa');
    this.add.image(480, 35, 'thanhtren');
    this.ball1 = this.add.image(250, 35, 'bomb');
    this.ball2 = this.add.image(280, 35, 'bomb');
    this.ball3 = this.add.image(700, 35, 'bomb');
    this.i1 = this.add.sprite(180, 270, 'Image1_game3t');
    this.i2 = this.add.sprite(180, 450, 'Image1_game3t');
    this.i3 = this.add.sprite(250, 270, 'Image1_game3t');
    this.i4 = this.add.sprite(250, 450, 'Image1_game3t');
    this.i5 = this.add.sprite(320, 270, 'Image1_game3t');
    this.i6 = this.add.sprite(320, 450, 'Image1_game3t');
    this.i7 = this.add.sprite(390, 270, 'Image1_game3t');
    this.i8 = this.add.sprite(390, 450, 'Image1_game3t');
    this.i9 = this.add.sprite(460, 270, 'Image1_game3t');
    this.i10 = this.add.sprite(460, 450, 'Image1_game3t');
    this.i11 = this.add.sprite(530, 270, 'Image1_game3t');
    this.i12 = this.add.sprite(530, 450, 'Image1_game3t');
    this.i13 = this.add.sprite(600, 270, 'Image1_game3t');
    this.i14 = this.add.sprite(600, 450, 'Image1_game3t');
    this.i15 = this.add.sprite(670, 270, 'Image1_game3t');
    this.i16 = this.add.sprite(670, 450, 'Image1_game3t');
    this.i17 = this.add.sprite(740, 270, 'Image1_game3t');
    this.i18 = this.add.sprite(740, 450, 'Image1_game3t');
    this.i19 = this.add.sprite(810, 270, 'Image1_game3t');
    this.i20 = this.add.sprite(810, 450, 'Image1_game3t');

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

    this.down = this.add.text(300, 100, "Move the bar DOWN", { font: "50px Arial", fill: "back" });
    this.loa = this.add.image(230, 130, 'loa');
    this.audio = this.sound.add('thu7');
    this.loa.setInteractive().on('pointerdown', () => {
      this.audio.play()
    })

  }

  initButton1() {

    this.clickspeak1();

    //this.setObjectVisible(this.thanh1)
    this.ii1 = this.add.sprite(180, 270, 'Image1_game3t');
    this.ii2 = this.add.sprite(180, 450, 'Image1_game3t');

    this.ii1.setInteractive().on('pointerdown', this.chooseTheAnswerUp, this);
    this.ii2.setInteractive().on('pointerdown', this.chooseTheAnswerDown, this);
  }

  chooseTheAnswerUp() {

    this.setRunBar1(true);

    setTimeout(() => {
      this.ii1.destroy();
      this.img11 = this.add.image(180, 270, 'img1t');

      this.destroyObject(this.up, this.ii2, this.thanh1, this.loa);
    }, 1500);

    setTimeout(() => {
      this.thanh2 = this.add.image(670, 360, 'thanht');
      this.clickspeak2();
    }, 2500);

  }
  chooseTheAnswerDown() {
    this.ii2.setTexture('wrong');

    setTimeout(() => this.ii2.setTexture('Image1_game3t'), 700);
  }
  /*
     buttun 2 
  */
  initButton2() {

    this.ii15 = this.add.sprite(670, 270, 'Image1_game3t');
    this.ii16 = this.add.sprite(670, 450, 'Image1_game3t');
    this.ii15.setInteractive().on('pointerdown', this.chooseTheAnswerUp2, this);
    this.ii16.setInteractive().on('pointerdown', this.chooseTheAnswerDown2, this);
  }

  chooseTheAnswerUp2() {

    this.ii15.setTexture('wrong');
    setTimeout(() => { this.ii15.setTexture('Image1_game3t') }, 700);

  }


  chooseTheAnswerDown2() {

    this.setRunBar2(true);
    setTimeout(() => {
      this.ii16.destroy();
      this.img88 = this.add.image(670, 450, 'img8');

      this.destroyObject(this.down, this.ii15, this.thanh2, this.loa);
    }, 1500);
    setTimeout(() => {
      this.thanh3 = this.add.image(320, 360, 'thanht');
      this.clickspeak1();

    }, 2500);



  }

  chooseTheAnswerUp2() {

    this.ii15.setTexture('wrong');

    setTimeout(() => this.ii15.setTexture('Image1_game3t'), 1000);

  }

  initButton3() {
    this.ii5 = this.add.sprite(320, 270, 'Image1_game3t');
    this.ii6 = this.add.sprite(320, 450, 'Image1_game3t');
    this.ii5.setInteractive().on('pointerdown', this.chooseTheAnswerUp3, this);
    this.ii6.setInteractive().on('pointerdown', this.chooseTheAnswerDown3, this);
  }

  chooseTheAnswerUp3() {

    this.setRunBar3(true);

    setTimeout(() => {
      this.ii5.destroy();

      this.img33 = this.add.image(320, 270, 'img3');
      this.destroyObject(this.up, this.ii6, this.thanh3, this.loa);
    }, 1500);

    setTimeout(() => {
      this.thanh4 = this.add.image(390, 360, 'thanht');
      this.clickspeak2();
    }, 2500);

  }
  chooseTheAnswerDown3() {
    this.ii6.setTexture('wrong');

    setTimeout(() => this.ii6.setTexture('Image1_game3t'), 700);
  }


  initButton4() {
    this.ii7 = this.add.sprite(390, 270, 'Image1_game3t');
    this.ii8 = this.add.sprite(390, 450, 'Image1_game3t');

    this.ii7.setInteractive().on('pointerdown', this.chooseTheAnswerUp4, this);
    this.ii8.setInteractive().on('pointerdown', this.chooseTheAnswerDown4, this);
  }

  chooseTheAnswerUp4() {

    this.ii7.setTexture('wrong');
    setTimeout(() => { this.ii7.setTexture('Image1_game3t') }, 700);

  }
  chooseTheAnswerDown4() {

    this.setRunBar4(true)
    setTimeout(() => {
      this.ii8.destroy();
      this.img44 = this.add.image(390, 450, 'img4');

      this.destroyObject(this.down, this.ii7, this.thanh4, this.loa);
    }, 1500)
    setTimeout(() => {
      this.thanh5 = this.add.image(740, 360, 'thanht');
      this.clickspeak1();
    }, 2500);

  }

  chooseTheAnswerUp2() {
    this.ii7.setTexture('wrong');
    setTimeout(() => this.ii7.setTexture('Image1_game3t'), 700);
  }

  initButton5() {
    this.ii17 = this.add.sprite(740, 270, 'Image1_game3t');
    this.ii18 = this.add.sprite(740, 450, 'Image1_game3t');
    this.ii17.setInteractive().on('pointerdown', this.chooseTheAnswerUp5, this);
    this.ii18.setInteractive().on('pointerdown', this.chooseTheAnswerDown5, this);
  }

  chooseTheAnswerUp5() {
    this.setRunBar5(true);
    setTimeout(() => {
      this.ii17.destroy();
      this.img99 = this.add.image(740, 270, 'img9');
      this.destroyObject(this.up, this.ii18, this.thanh5, this.loa);
    }, 1500);

    setTimeout(() => {
      this.thanh6 = this.add.image(250, 360, 'thanht');
      this.clickspeak2();
    }, 2500);

  }
  chooseTheAnswerDown5() {
    this.ii8.setTexture('wrong');
    setTimeout(() => this.ii18.setTexture('Image1_game3t'), 700);
  }
  initButton6() {
    this.ii3 = this.add.sprite(250, 270, 'Image1_game3t');
    this.ii4 = this.add.sprite(250, 450, 'Image1_game3t');

    this.ii3.setInteractive().on('pointerdown', this.chooseTheAnswerUp6, this);
    this.ii4.setInteractive().on('pointerdown', this.chooseTheAnswerDown6, this);
  }

  chooseTheAnswerUp6() {
    this.ii3.setTexture('wrong');
    setTimeout(() => { this.ii3.setTexture('Image1_game3t') }, 700);
  }
  chooseTheAnswerDown6() {
    this.setRunBar6(true)
    setTimeout(() => {
      this.ii4.destroy();
      this.img22 = this.add.image(250, 450, 'img2t');
      this.destroyObject(this.down, this.ii3, this.thanh6, this.loa);
    }, 1500)
    setTimeout(() => {
      this.thanh7 = this.add.image(460, 360, 'thanht');
      this.clickspeak1();
    }, 2500);

  }
  initButton7() {
    this.ii9 = this.add.sprite(460, 270, 'Image1_game3t');
    this.ii10 = this.add.sprite(460, 450, 'Image1_game3t');
    this.ii9.setInteractive().on('pointerdown', this.chooseTheAnswerUp7, this);
    this.ii10.setInteractive().on('pointerdown', this.chooseTheAnswerDown7, this);
  }

  chooseTheAnswerUp7() {

    this.setRunBar7(true);
    setTimeout(() => {
      this.ii9.destroy();
      this.img55 = this.add.image(460, 270, 'img5');
      this.destroyObject(this.up, this.ii10, this.thanh7, this.loa);
    }, 1500);

    setTimeout(() => {
      this.thanh8 = this.add.image(530, 360, 'thanht');
      this.clickspeak2();
    }, 2500);

  }
  chooseTheAnswerDown7() {
    this.ii10.setTexture('wrong');
    setTimeout(() => this.ii10.setTexture('Image1_game3t'), 1000);
  }

  initButton8() {
    this.ii11 = this.add.sprite(530, 270, 'Image1_game3t');
    this.ii12 = this.add.sprite(530, 450, 'Image1_game3t');

    this.ii11.setInteractive().on('pointerdown', this.chooseTheAnswerUp8, this);
    this.ii12.setInteractive().on('pointerdown', this.chooseTheAnswerDown8, this);
  }

  chooseTheAnswerUp8() {

    this.ii11.setTexture('wrong');
    setTimeout(() => { this.ii11.setTexture('Image1_game3t') }, 700);

  }
  chooseTheAnswerDown8() {

    this.setRunBar8(true)
    setTimeout(() => {
      this.ii12.destroy();
      this.img66 = this.add.image(530, 450, 'img6');

      this.destroyObject(this.down, this.ii11, this.thanh8, this.loa);
    }, 1500)
    setTimeout(() => {
      this.thanh9 = this.add.image(600, 360, 'thanht');
      this.clickspeak1();
    }, 2500);

  }
  initButton9() {

    this.ii13 = this.add.sprite(600, 270, 'Image1_game3t');
    this.ii14 = this.add.sprite(600, 450, 'Image1_game3t');
    this.ii13.setInteractive().on('pointerdown', this.chooseTheAnswerUp9, this);
    this.ii14.setInteractive().on('pointerdown', this.chooseTheAnswerDown9, this);
  }

  chooseTheAnswerUp9() {

    this.setRunBar9(true);

    setTimeout(() => {
      this.ii13.destroy();

      this.img77 = this.add.image(600, 270, 'img7');
      this.destroyObject(this.up, this.ii14, this.thanh9, this.loa);
    }, 1500);

    setTimeout(() => {
      this.thanh10 = this.add.image(810, 360, 'thanht');
      this.clickspeak2();
    }, 2500);

  }
  chooseTheAnswerDown9() {
    this.ii14.setTexture('wrong');
    setTimeout(() => this.ii14.setTexture('Image1_game3t'), 1000);
  }

  initButton10() {
    this.ii19 = this.add.sprite(810, 270, 'Image1_game3t');
    this.ii20 = this.add.sprite(810, 450, 'Image1_game3t');

    this.ii19.setInteractive().on('pointerdown', this.chooseTheAnswerUp10, this);
    this.ii20.setInteractive().on('pointerdown', this.chooseTheAnswerDown10, this);
  }

  chooseTheAnswerUp10() {
    this.ii19.setTexture('wrong');
    setTimeout(() => { this.ii19.setTexture('Image1_game3t') }, 700);
  }
  chooseTheAnswerDown10() {

    this.setRunBar10(true)
    setTimeout(() => {
      this.ii20.destroy();
      this.img100 = this.add.image(810, 450, 'img10');
      this.destroyObject(this.down, this.ii19, this.thanh10, this.loa);
    }, 1500)

    setTimeout(() => {
      this.destroyObject(this.ii3, this.img11, this.img22, this.img33, this.img44, this.img55, this.img66, this.img77, this.img88, this.img99, this.img100, this.thanh2);

      this.setRun(true);
      this.SetRunBall(true);
      this.setObjectVisible(this.i1, this.i2, this.i3, this.i4, this.i5, this.i6, this.i7, this.i8, this.i9, this.i10, this.i11, this.i12, this.i13, this.i14, this.i15, this.i16, this.i17, this.i18, this.i19, this.i20);
      this.destroyObject(this.i1, this.i2, this.i3, this.i4, this.i5, this.i6, this.i7, this.i8, this.i9, this.i10, this.i11, this.i12, this.i13, this.i14, this.i15, this.i16, this.i17, this.i18, this.i19, this.i20, this.down, this.loa);
    }, 3000)


  }

  //Back
  initScoreBoard() {
    this.back = this.add.text(50, 20, "< Back", { color: '#6196FF', font: '26px Arial' });
    this.back.setInteractive().on('pointerdown', () => {
      window.location.href = '#/geometry'
    });



  }

}
