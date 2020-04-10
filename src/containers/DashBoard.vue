<template>
  <div id="dash-board">
    <TopMenu />
    <div class="container d-flex">
      <SideBarMenu />
    </div>
  </div>
</template>

<script>
import SideBarMenu from "../components/sidebarmenu/SideBarMenu";
import TopMenu from "../components/topmenu/TopMenu";
export default {
  components: {
    TopMenu,
    SideBarMenu
  }
};
</script>

<style lang="scss" scoped>
#dash-board {
  height: 100vh;
}
</style>