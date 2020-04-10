<template>
  <BackGround>
    <div class="game-wrapper">
      <div class="game-control">
        <a href="#/geometry">
          <font-awesome-icon icon="angle-left" />Back
        </a>
        <div class="game-status row">
          <div v-for="style in styleBall" :key="style.left">
            <div class="ball" v-bind:style="{left:style.left+'px'}"></div>
          </div>
        </div>
      </div>
      <!-- <div class="game-objects"> -->
      <h2>
        Move the flag
        <b>down</b>
      </h2>
      <div class="flagstaff"></div>
      <div class="flag"></div>

      <font-awesome-icon class="arrow-down" icon="arrow-down" />
    </div>
  </BackGround>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BackGround from "../../components/background/BackGround";
export default {
  components: {
    FontAwesomeIcon,
    BackGround
  },

  data() {
    return {
      styleBall: [
        { left: 2 },
        { left: 25 },
        { left: 50 },
        { left: 75 },
        { left: 100 }
      ],
      
    };
  }
  //   methods: {
  //       doneDrag:function(){
  //         const {status, data} = this.state;

  //         if() {
  //             if(status === 0) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {left: 75}, {right: 2} ]});
  //             if(status === 1) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {right: 25}, {right: 2} ]});
  //             if(status === 2) this.setState({styleBall: [ { left: 2 },{ left: 25}, {right: 50}, {right: 25}, {right: 2} ]});
  //             if(status === 3) this.setState({styleBall: [ { left: 2 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});
  //             if(status === 4) this.setState({styleBall: [ { right: 100 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});

  //             this.setState({status: this.state.status + 1});

  //         }

  //     }
  //   }
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
  width: 500px;
  border: 2px solid rgb(179, 177, 177);
  height: 25px;
  /* margin: auto; */
  text-align: center;
  border-radius: 20px;
  left: 250px;
  position: relative;
  background-color: rgb(233, 230, 230);
}
.ball {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-image: url(https://content.dragonlearn.in/fp/97/fat_player/components/progress/beads/v1/img/bead-874cc643b18fbe33aacee82d8f4353eec013afca7486232ce8e36adbbae9eeb6.png);
  background-repeat: no-repeat;
  position: absolute;
}
.flag {
  background-image: url(https://content.dragonlearn.in/128633/1131/23.png);
  top: 325px;
  position: absolute;
  right: 380px;
  width: 140px;
  height: 140px;
}
.flagstaff {
  top: 125px;
  position: absolute;
  right: 380px;
  background-image: url(https://content.dragonlearn.in/128633/1131/35.png);
  width: 220px;
  height: 540px;
}
h2 {
  position: absolute;
  left: 360px;
  top: 365px;
}
.arrow-up {
  position: absolute;
  font-size: 100px;
  color: #258fcc;
  top: 250px;
  left: 450px;
}
.arrow-down {
  position: absolute;
  font-size: 100px;
  color: pink;
  bottom: 220px;
  left: 450px;
}
</style>