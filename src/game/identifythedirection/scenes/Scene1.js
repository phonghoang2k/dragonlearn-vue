import Phaser from 'phaser';
import tree from '../assets/tree.png';
import bug from '../assets/bug-up.png';
import ok from '../assets/ok.png';
import ok_red from '../assets/ok-red.png';
import ok_green from '../assets/ok-green.png';

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene1" });
        this.isRun = false;
        this.answer = 'UP';
    }

    preload() {
        this.load.image('ok', ok);
        this.load.image('ok-red', ok_red);
        this.load.image('ok-green', ok_green);
        this.load.image('tree', tree);
        this.load.image('bug', bug);
    }


    create() {
        this.add.image(0, 0, 'background');
        this.add.image(300, 300, 'tree');
        if (this.answer == 'UP') {
            this.object = this.add.image(295, 500, 'bug');
        } else {
            this.object = this.add.image(295, 100, 'bug');
        }
        this.initText();
        this.initButton();


    }

    update() {
        if (this.isRun) {
            this.run();
        }
        if (this.object.y == 300) {
            this.setRun(false);
            this.setObjectVisible(true, this.up, this.down, this.UpBtn, this.DownBtn);
        }

        if (this.object.y < 40) {
            this.destroyObject(this.object)
            this.setRun(false);
        }

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

    clickNext() {
        this.setRun(true);
        this.destroyObject(this.next);
    }

    setRun(x) {
        this.isRun = x;
    }

    run() {
        if (this.answer == 'UP') {
            this.object.y--;
        } else {
            this.object.y++;
        }
    }

    initText() {
        this.question = this.add.text(500, 230, "Which way is the object going?", { color: '#000000', font: 'bold 32px Arial' })
        this.next = this.add.text(700, 300, 'Next', { color: "#6ec3e2", font: '26px Arial' });
        this.next.setInteractive().on('pointerdown', this.clickNext, this);

    }

    initButton() {
        this.up = this.add.text(600, 300, "Up", { color: '#000000', font: '32px Arial' })
        this.down = this.add.text(600, 380, "Down", { color: '#000000', font: '32px Arial' })
        this.UpBtn = this.add.sprite(800, 320, 'ok');
        this.DownBtn = this.add.sprite(800, 400, 'ok');
        this.setObjectVisible(false, this.up, this.down, this.UpBtn, this.DownBtn);
        this.UpBtn.setInteractive().on('pointerdown', this.clickButtonUp, this);
        this.DownBtn.setInteractive().on('pointerdown', this.clickButtonDown, this);
    }

    clickButtonUp() {
        if (this.answer == 'UP') {
            this.UpBtn.setTexture('ok-green');
            setTimeout(() => {
                this.UpBtn.setTexture('ok');
                this.destroyObject(this.DownBtn, this.UpBtn, this.down);
                this.setRun(true);
            }, 1000);

        } else {
            this.UpBtn.setTexture('ok-red');
            setTimeout(() => this.UpBtn.setTexture('ok'), 1000);
        }
    }


    clickButtonDown() {
        if (this.answer == 'DOWN') {
            this.UpBtn.setTexture('ok-green');
            setTimeout(() => {
                this.DownBtn.setTexture('ok');
                this.destroyObject(this.DownBtn, this.UpBtn, this.up);
                this.setRun(true);
            }, 1000);
        } else {
            this.DownBtn.setTexture('ok-red');
            setTimeout(() => this.DownBtn.setTexture('ok'), 1000);
        }
    }

}