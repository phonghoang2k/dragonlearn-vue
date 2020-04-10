<template>
  <div class="sidebar">
    <div>
      <h4 class="text-left">
        My courses
        <span>
          <font-awesome-icon icon="angle-right" />
        </span>
      </h4>
      <nav class="sidebar__menu text-left">
        <router-link to="/numbers" class="sidebar__link" active-class="sidebar__link-active">Numbers</router-link>
        <router-link
          to="/operations"
          class="sidebar__link"
          active-class="sidebar__link-active"
        >Operations</router-link>
        <router-link
          to="/geometry"
          class="sidebar__link"
          active-class="sidebar__link-active"
        >Geometry</router-link>
        <router-link
          to="/measurement"
          class="sidebar__link"
          active-class="sidebar__link-active"
        >Measurement</router-link>
        <router-link
          to="/secret-lab"
          class="sidebar__link"
          active-class="sidebar__link-active"
        >Secret Lab</router-link>
      </nav>
    </div>

    <router-view></router-view>
   
  </div>
   
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "SideBarMenu",
  components: {
    FontAwesomeIcon
  },
  props: {}
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin-top: 10vh;
  /* width: 25%; */
  position: relative;
}
.sidebar__menu {
  font-weight: 700;
  width: 90%;
  list-style: none;
  border: 1px solid blueviolet;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgb(108, 100, 116);
  padding: 20px 0;
  /* margin: 20px auto; */
  margin-right: 50px;
  max-width: 300px;
  display: inline-block;
}

.sidebar__link {
  color: black;
  display: block;
  padding: 15px 25px;
  border-radius: 2px;
}

.sidebar__link:hover {
  color: red;
  text-decoration: none;
}

.sidebar__link-active {
  background-color: #f0b100;
  color: #fff;
}

.sidebar__link-active:hover {
  color: #fff;
}
</style>