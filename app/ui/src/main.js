// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import vuexI18n from 'vuex-i18n'
import translationsEn from './i18n/en'

// Set up a global mechanism to pass events
/*
window.Event = new class {
  constructor () {
    this.vue = new Vue()
  }

  fire (event, data = null) {
    this.vue.$emit(event, data)
  }

  listen (event, callback) {
    this.vue.$on(event, callback)
  }
}()
*/

Vue.config.productionTip = false

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('en', translationsEn)

Vue.i18n.set('en')

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
