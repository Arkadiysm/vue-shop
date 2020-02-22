import Vue from 'vue'
import App from './components/App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
