<template>
  <BackGround>
    <div :id="containerId" v-if="downloaded" />
    <div class="placeholder" v-else>Downloading ...</div>
  </BackGround>
</template>


<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BackGround from "../../components/background/BackGround";
export default {
  components: {
    BackGround,
    FontAwesomeIcon
  },
  name: "Game",
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: "game-container"
    };
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ "@/game/game3/game");
    this.downloaded = true;
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId);
    });
  },
  destroyed() {
    this.gameInstance.destroy(false);
  }
};
</script>


<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>
