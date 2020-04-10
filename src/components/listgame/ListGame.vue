<template>
  <div class="text-center listgame">
    <h4 class="category">{{category}}</h4>
    <div class="row">
      <div class="col-md-4" v-for="game of games" :key="game.name">
        <GameItem v-bind:name="game.name" v-bind:img="game.img"></GameItem>
      </div>
    </div>
  </div>
</template>
<script>
import custom from "../../custom";
import GameItem from "./gameitem/GameItem";
export default {
  name: "ListGame",
  data() {
    return {
      games: [
        {
          name: "Move the object up or down part 2",
          img: custom.GAME1LINK
        },
        {
          name: "Identify the direction up or down",
          img: custom.GAME2LINK
        },
        {
          name: "Move the object up or down",
          img: custom.GAME3LINK
        }
      ]
    };
  },
  props: ["category"],
  components: {
    GameItem
  }
};
</script>
<style lang="scss" scoped>
.category {
  font-weight: 700;
}

.listgame {
  display: inline-block;
  min-width: 750px;
  position: absolute;
  top: 5px;
  left: 250px;
}
</style>