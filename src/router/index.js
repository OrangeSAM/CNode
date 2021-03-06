import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article.vue'
import Postlist from '../components/Postlist.vue'
import Userinfo from '../components/Userinfo.vue'
import Sidebar from "../components/Sidebar.vue"

Vue.use(Router)

//routes也可以在外部定义好，直接在创建实例时使用
export default new Router({
  routes: [{
    name: 'root',
    path: '/',
    components: {
      main: Postlist
    }
  }, {
    name: 'post_content',
    path: '/topic/:id&name=:name',
    components: {
      main: Article,
      side: Sidebar
      //这个main是啥意思，代表什么
      //router-view中的name
      //点击首页的文章标题后就会用article组件替换掉之前在main
      //中的postlist 组件
    }
  }, {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
      main: Userinfo
    }
  }]
})
