import Phaser from 'phaser';

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene1" });
        this.isRun = false;
        this.answer = 'UP';
        this.keyanswer = 'up';
        this.objectName = 'yellow_flag';
        this.backgroundElement = 'flag';
        this.question = 'Move the flag';
        this.isRunBall = true;
    }
    create() {
        this.add.image(0, 0, 'background');
        this.add.image(850, 300, this.backgroundElement);
        this.add.image(480, 35, 'bar');
        this.point1 = this.add.image(250, 35, 'point');
        this.point2 = this.add.image(275, 35, 'point');
        this.point3 = this.add.image(300, 35, 'point');
        this.point4 = this.add.image(325, 35, 'point');
        this.point5 = this.add.image(350, 35, 'point');
        this.point6 = this.add.image(375, 35, 'point');
        this.point7 = this.add.image(400, 35, 'point');
        this.point8 = this.add.image(425, 35, 'point');

        this.object = this.add.image(890, 300, this.objectName);

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
            this.setObjectVisible(true, this.upBtn, this.downBtn);
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
        if (this.answer == 'UP' && this.object.y >= 100) {
           this.object.y--;
           
        } else if(this.answer == 'DOWN' && this.object.y <= 800) {
            this.object.y++;
        }
        if(this.point8.x <= 710 )this.point8.x += 2;
    }

    initText() {
        this.question = this.add.text(180, 300, this.question, { color: '#000000', font: '35px Arial' });
        this.keyanswer = this.add.text(400, 300, this.keyanswer, { color: '#000000', font: "bold 35px Arial" });
        // this.next = this.add.text(700, 300, 'Next', { color: "#6ec3e2", font: '26px Arial' });
        // this.next.setInteractive().on('pointerdown', this.clickNext, this);

    }

    initButton() {
       
        this.upBtn = this.add.sprite(750, 200, 'arrow_up').setScale(0.75,0.75);
        this.downBtn = this.add.sprite(750, 400, 'arrow_down').setScale(0.75,0.75);
        this.setObjectVisible(false, this.upBtn, this.downBtn);
        this.upBtn.setInteractive().on('pointerdown', this.clickButtonUp,this);
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
            this.upBtn.setTint(0x00FF00);
            setTimeout(() => {

                this.destroyObject(this.downBtn);
                this.setRun(true);
            }, 1000);

        }else this.upBtn.setTint(0xff0000);
    }


    clickButtonDown() {
        if (this.answer == 'DOWN') {
            this.downBtn.setTint(0x00FF00);
            setTimeout(() => {
             
                this.destroyObject(this.upBtn);
                this.setRun(true);
            }, 1000);
        } else this.downBtn.setTint(0xff0000);
    }

}