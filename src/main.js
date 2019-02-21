// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
Vue.filter('formatDate', function (str) {
  if (!str) return ''
  let date = new Date(str);
  let time = new Date().getTime() - date.getTime();
  switch (time) {
    case (time / 1000) < 60:
      return parseInt((time / 1000)) + '秒前';
    case (time / 60000) < 60:
      return parseInt((time / 60000)) + "分钟前";
    case (time / 3600000) < 24:
      return parseInt((time / 3600000)) + "小时前";
    case (time / 86400000) < 31:
      return parseInt((time / 86400000)) + "天前";
    case (time / 25920000000) < 12:
      return parseInt(time / 2592000000) + '月前';
    case (time / 31536000000) > 12:
      return parseInt((time / 31536000000)) + '年前'
    default:
      console.log(time);
      return '';
  }
})

Vue.filter('formatTopicType', function (post) {
  switch (post) {
    case post.good == true:
      return '精华';
    case post.top == true:
      return '置顶';
    case post.tab === 'ask':
      return '问答';
    case post.tab === 'share':
      return '分享';
    default:
      return '招聘';
  }
})
