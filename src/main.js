import Vue from 'vue'
import App from './views/App.vue'
import store from './state/store'
import routes from './routes'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  store,
  routes,
  vuetify,
  render: h => h(App)
}).$mount('#app')
