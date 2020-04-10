<template>
  <div class="topmenu">
    <nav class="navbar navbar-expand-sm navbar-dark topmenu__back">
      <div class="container">
        <a class="navbar-brand topmenu__logo" href="#">
          DragonLearn.in
          <font-awesome-icon icon="dragon" />
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link topmenu_link" href="#">
                My Course
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link topmenu_link" href="#">
                About
                </a>
            </li>
          </ul>
          <div class="my-2 my-lg-0 d-flex user justify-content-center align-items-center">
            <div class="user__avatar">
              <img
                class="user__avatar__img"
                src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-dang-cong-san-viet-nam-flag-of-the-communist-party-of-vietnam.svg_.png"
                height="50px"
                width="50px"
              />
            </div>
            <div class="user__name">Phong Phong</div>
            <font-awesome-icon class="user__icon" icon="user" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "TopMenu",
  components: {
    FontAwesomeIcon
  },
  props: {}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.topmenu__back {
  background-color: #929292;
  color: #fff;
}

.topmenu__logo {
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
}

.user__avatar__img {
  border: 5px solid;
  border-radius: 50%;
}

.user__name {
  margin: 0 10px;
}

.user__icon {
  font-size: 1.3rem;
}
</style>