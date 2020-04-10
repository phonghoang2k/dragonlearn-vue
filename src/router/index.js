import UpAndDown from "../containers/UpAndDown"
import Vue from 'vue'
import Router from 'vue-router'
import MoveObjectsUpOrDown2 from "../containers/moveobjectupordown2/MoveObjectsUpOrDown"
import IdentifyTheDirection from '../containers/identifythedirection/IdentifyTheDirection.vue'

Vue.use(Router)

const router = new Router({
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/numbers", component: null
    },
    {
      path: "/operations", component: null
    },
    { 
      path: "/geometry",
      component: UpAndDown,
    },
    {
      path: "/move-the-object-up-or-down-part-2",
      component: MoveObjectsUpOrDown2
    },
    {
      path: "/identify-the-direction-up-or-down",
      component: IdentifyTheDirection
    },
    {
      path: "/measurement", component: null
    },
    {
      path: "/secret-lab", component: null
    }
  ]
})

export default router