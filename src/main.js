import Vue from 'vue'
import App from './App.vue'

import { VueAxios } from "@/utils/axios";
Vue.use(VueAxios)

import { router } from "@/router";
import store from '@/store'

Vue.config.productionTip = false

import '@/antd'
import boot from '@/core/boot'
import '@/core/permission'

new Vue({
  render: h => h(App),
  router,
  store,
  created: boot
}).$mount('#app')
