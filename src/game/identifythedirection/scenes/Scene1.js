import Phaser from 'phaser';

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene1" });
        this.isRun = false;
        this.answer = 'UP';
        this.objectName = 'bug';
        this.backgroundElement = 'tree';
        this.question = 'Which way is the bug going?';
    }
    create() {
        this.add.image(0, 0, 'background');
        this.add.image(300, 300, this.backgroundElement);
        if (this.answer == 'UP') {
            this.object = this.add.image(295, 500, this.objectName);
        } else {
            this.object = this.add.image(295, 100, this.objectName);
        }
        this.initText();
        this.initButton();
        this.initScoreBoard();


    }

    update() {
        if (this.isRun) {
            this.run();
        }
        if (this.object.y == 300) {
            this.setRun(false);
            this.setObjectVisible(true, this.up, this.down, this.upBtn, this.downBtn);
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
        this.question = this.add.text(500, 230, this.question, { color: '#000000', font: 'bold 32px Arial' })
        this.next = this.add.text(700, 300, 'Next', { color: "#6ec3e2", font: '26px Arial' });
        this.next.setInteractive().on('pointerdown', this.clickNext, this);

    }

    initButton() {
        this.up = this.add.text(600, 300, "Up", { color: '#000000', font: '32px Arial' })
        this.down = this.add.text(600, 380, "Down", { color: '#000000', font: '32px Arial' })
        this.upBtn = this.add.sprite(800, 320, 'ok');
        this.downBtn = this.add.sprite(800, 400, 'ok');
        this.setObjectVisible(false, this.up, this.down, this.upBtn, this.downBtn);
        this.upBtn.setInteractive().on('pointerdown', this.clickButtonUp, this);
        this.downBtn.setInteractive().on('pointerdown', this.clickButtonDown, this);
    }

    initScoreBoard() {
        this.back = this.add.text(50, 20, "< Back", { color: '#6196FF', font: '26px Arial' });
        this.back.setInteractive().on('pointerdown', () => {
            window.location.href = '/geometry'
        })
    }

    clickButtonUp() {
        if (this.answer == 'UP') {
            this.upBtn.setTexture('ok-green');
            setTimeout(() => {
                this.upBtn.setTexture('ok');
                this.destroyObject(this.downBtn, this.upBtn, this.down);
                this.setRun(true);
            }, 1000);

        } else {
            this.upBtn.setTexture('ok-red');
            setTimeout(() => this.upBtn.setTexture('ok'), 1000);
        }
    }


    clickButtonDown() {
        if (this.answer == 'DOWN') {
            this.upBtn.setTexture('ok-green');
            setTimeout(() => {
                this.downBtn.setTexture('ok');
                this.destroyObject(this.downBtn, this.upBtn, this.up);
                this.setRun(true);
            }, 1000);
        } else {
            this.downBtn.setTexture('ok-red');
            setTimeout(() => this.downBtn.setTexture('ok'), 1000);
        }
    }

}