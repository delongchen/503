import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)

import { routes } from "@/router/routes";

const router = new VueRouter({
  mode: 'history',
  routes
})

export {
  router
}
