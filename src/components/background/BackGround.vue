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

  background-image: url(https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg);
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