<template>
  <div class="game">
    <router-link :to="convertlink(name)">
      <div class="game__thumnail">
        <img class="game__thumnail_img" :src="img" alt="game-thumnail" width="100%" />
        <font-awesome-icon class="game__thumnail__icon" icon="check-circle" />
      </div>
      <h5 class="game__title">{{name}}</h5>
    </router-link>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "GameItem",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {};
  },
  props: ["img", "name"],
  methods: {
    convertlink: function(url) {
      return (
        "/" +
        url
          .toLowerCase()
          .split(" ")
          .join("-")
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.game__thumnail {
  border: 4px solid #b0d2a8;
  border-radius: 10px;
  width: 100%;
  transform: scale(0.8);
}

.game__thumnail_img {
  border-radius: 10px;
}

.game__thumnail__icon {
  color: #b0d2a8;
  font-size: 3rem;
  position: absolute;
  right: -15px;
  top: -25px;
  background-color: #fff;
  border-radius: 50%;
}

.game__title {
  font-size: 1.1rem;
}
</style>