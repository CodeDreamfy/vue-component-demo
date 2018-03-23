// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Button, Select, Option } from 'element-ui';
import '@/css/main.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
/* eslint-disable no-new */

Vue.component('kaiguan', {
  props: ['text'],
  template: `<div :class="'box' + text">
    <a href="javascript:;">点击开关 {{ text }}</a>
  </div>`,
});

Vue.component('worktime', {
  props: ['text'],
  template: '<div>A Component: {{ text }}</div>',
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
