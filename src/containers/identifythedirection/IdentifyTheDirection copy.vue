/* eslint-disable no-unused-vars */
<template>
  <BackGround>
    <div class="game-wrapper">
      <div class="game-control">
        <a href="#/geometry">
          <font-awesome-icon icon="angle-left" />Back
        </a>
        <div class="game-status row">
          <div v-for="pos of game.ballPos" :key="pos">
            <div class="ball" :style="{transform: transformX_c, left: pos+'px'}"></div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" v-on:click="changeBallPos">hihi</button>
      <div>
        <textarea rows="10" cols="50" type="text" v-model="input"></textarea>
        <div>
          <button @click="clearmove">clearmove</button>
          <button @click="interpret">interpret</button>
        </div>
        <div class="transition" :style="{ transform: transformX_c }"></div>
      </div>
    </div>
  </BackGround>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BackGround from "../../components/background/BackGround";

export default {
  name: "IdentifyTheDirection",
  components: {
    FontAwesomeIcon,
    BackGround
  },
  // data() {
  //   return {
      // game: {
      //   balls: 5,
      //   ballPos: [4, 28, 52, 76, 100],
      //   ballEndGamePos: [340, 364, 388, 412, 436]
      // }
  //   };
  // },
  data() {
    return {
      game: {
        balls: 5,
        ballPos: [4, 28, 52, 76, 100, 124],
        ballEndGamePos: [340, 364, 388, 412, 436],
        distanceMove: 312
      },
      input: "",
      keys: [],
      step: 100,
      x: 0,
      y: 0
    };
  },
  computed: {
    transformX_c() {
      var vm = this;
      return `translate(${vm.x}px,${vm.y}px)`;
    }
  },
  methods: {
    moveup() {
      var vm = this;
      vm.y -= vm.step;
    },
    movedown() {
      var vm = this;
      vm.y += vm.step;
    },
    moveleft() {
      var vm = this;
      vm.x -= vm.step;
    },
    moveright() {
      var vm = this;
      vm.x += vm.step;
    },
    clearmove() {
      var vm = this;
      vm.input = "";
      vm.x = 0;
      vm.y = 0;
    },
    interpret() {
      let vm = this,
        exp = vm.input
          .trim()
          .replace(/(\r\n|\n|\r)/gm, " ")
          .replace(/\s\s+/g, " ")
          .toUpperCase();
      // eslint-disable-next-line no-unused-vars
      let list = [];
      let expAry = exp.split(" ");

      for (var i = 0; i < expAry.length; i++) {
        // eslint-disable-next-line no-unused-vars
        (function(index) {
          var e = expAry[i];
          setTimeout(function() {
            if (e === "RIGHT") {
              vm.moveright();
            } else if (e === "LEFT") {
              vm.moveleft();
            } else if (e === "UP") {
              vm.moveup();
            } else if (e === "DOWN") {
              vm.movedown();
            }
          }, i * 1000);
        })(i);
      }
    },
    changeBallPos: function() {
      while (this.game.balls != 0) {
        for (let index = 0; index < this.game.balls; index++) {
          if (index == this.game.balls - 1) {
            if (this.game.ballPos[index] == this.game.ballEndGamePos[index]) {
              this.game.balls--;
            } else {
              this.game.ballPos[index] += 1;
            }
            console.log(this.game.ballPos);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.game-wrapper {
  width: 1000px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(207, 192, 192);
  z-index: 10000;
}
.game-control {
  height: 50px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 20px;
}

.game-status {
  width: 465px;
  height: 26px;
  left: 23.25%;
  border-radius: 20px;
  background: #ededed;
  border: 0.5px solid rgb(179, 177, 177);
  position: relative;
  background-color: rgb(233, 230, 230);
}

.ball {
  transition: 1s;
  display: block;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background-image: url(https://content.dragonlearn.in/fp/97/fat_player/components/progress/beads/v1/img/bead-874cc643b18fbe33aacee82d8f4353eec013afca7486232ce8e36adbbae9eeb6.png);
  background-repeat: no-repeat;
  position: absolute;
}

.transition {
  transition: 1s;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  display: block;
  background-image: url("68.png");
  background-repeat: no-repeat;
  position: absolute;
}
</style>