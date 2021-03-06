// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// 关闭生产模式下的提示
Vue.config.productionTip = false;

// 错误信息打印
Vue.config.errorHandler = (err) => {
  console.error(err);
};

window.vm = new Vue({
  el: '#app',
  router,
  store, // 状态管理，如果登录之后的一些数据
  template: '<App/>',
  components: { App }
});
