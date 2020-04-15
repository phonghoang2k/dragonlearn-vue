<template>
  <div class="background-game">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-game {
  width: 100vw;
  height: 100vh;

  background-image: url(https://c8.alamy.com/comp/T9DNRE/artificial-intelligence-ai-and-machine-learning-technology-website-banner-or-background-T9DNRE.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.background-game::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
}
</style>