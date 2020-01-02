import Vue from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-MNTXDS0Z7G',
    'anonymize_ip': true
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#dvd');
