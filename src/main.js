import './assets/css/style.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SvgIcon from './_components/common/SvgIcon.vue';

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("./assets/svg", true, /\.svg$/)
requireAll(req);

Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
