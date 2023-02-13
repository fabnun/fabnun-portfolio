import Vue from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueScrollTo from 'vue-scrollto';
import VueRouter from 'vue-router';
var VueCookie = require('vue-cookie');

Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.use(VueCookie);

Vue.config.productionTip = false;

const routes = [
  { path: '/xml-namespace-to-camelcase-converter', component: () => import('./utils/xml-namespace-to-camelcase-converter.vue') },
  // { path: '/blog/(.+):post', component: () => import('./components/Post.vue') },
  {
    path: '*',
    component: () => import('./components/App.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
document.addEventListener('DOMContentLoaded', function(event) {
  //console.clear();
});
