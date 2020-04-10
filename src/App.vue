<template>
  <div id="app">
    <DashBoard />
  </div>
</template>

<script>
import DashBoard from "./containers/DashBoard";

export default {
  components: {
    DashBoard
  }
};
</script>

<style lang="scss">
#app {
  background-color: #f1ecec;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
