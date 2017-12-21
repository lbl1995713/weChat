
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import MuseUI from 'muse-ui'
import axiosConfig from './axiosConfig'
import vuexConfig from './vuexConfig'

import 'muse-ui/dist/muse-ui.css'
import './css/index.css'

Object.defineProperty(Vue.prototype, '$axios', { value:axiosConfig})

Vue.use(MuseUI)
Vue.use(Vuex)

/*引入全局插件*/
import Toast from './plugins/Toast/Toast'
Vue.use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(vuexConfig),//用于vuex
  template: '<App/>',
  components: { App }
})
