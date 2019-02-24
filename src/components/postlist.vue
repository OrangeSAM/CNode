<template>
  <div class="post">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.png" alt>
    </div>
    <div class="postlist" v-else>
      <nav>
        <span class="active">全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>问答</span>
        <span>招聘</span>
        <span>客户端测试</span>
      </nav>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <div class="topicwrap">
            <img :src="post.author.avatar_url" alt="头像" class="avator">
            <span class="replyvisit">
              <span title="回复数">{{post.reply_count}}</span>
              <span>/</span>
              <span title="浏览数">{{post.visit_count}}</span>
            </span>
            <span
              :class="[{putgood:(post.good==true),'puttop':(post.top==true),
              putnormal:(post.good!=true&& post.top!=true)}]"
            >{{post|formatTopicType}}</span>
            <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
              <span class="title">{{post.title}}</span>
            </router-link>
            <span class="replylast">{{post.last_reply_at|formatDate}}</span>
          </div>
        </li>
        <li>
          <pagination @handle="renderList"></pagination>
          <!-- 事件名有（）和没有的区别 -->
        </li>
      </ul>
    </div>
  </div>
</template>

 
<script>
import pagination from "./Pagination";
export default {
  name: "postlist",
  data() {
    return {
      isLoading: true,
      posts: [],
      page: 1
    };
  },
  components: {
    pagination
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.page,
            limit: 20
          }
        })
        .then(response => {
          this.isLoading = false;
          this.posts = response.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    renderList(value) {
      this.page = value;
      this.getData();
    }
  },
  beforeMount() {
    this.isLoading = true; //加载成功之前显示加载动画
    this.getData(); //页面加载前获取数据
  }
};
</script>


<style scoped>
.loading {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -100px; /* 高度的一半 */
  margin-left: -100px; /* 宽度的一半 */
}
.post {
  background-color: #ffffff;
  width: 100%;
}
.postlist .avator {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.postlist nav {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.postlist nav span {
  display: inline-block;
  margin: 0 10px;
  padding: 3px 4px;
  color: #80bd01;
  font-size: 14px;
}
.postlist nav span.active {
  background-color: #80bd01;
  color: #fff;
  border-radius: 3px;
}
.postlist li {
  border-top: 1px solid #f0f0f0;
}
.postlist li:first-child {
  border-top: none;
}
.postlist .topicwrap {
  padding: 10px;
  transition: all 0.3s;
}
.postlist .topicwrap:hover {
  background-color: #f9f6f6;
}
.postlist .topicwrap img {
  vertical-align: middle;
}

.postlist .topicwrap .replyvisit {
  display: inline-block;
  width: 70px;
  text-align: center;
  padding: 0 7px;
}
.topicwrap .replyvisit span {
  font-size: 12px;
}
.topicwrap .replyvisit span:first-child {
  color: #80bd01;
}
.topicwrap .replyvisit span:nth-child(2) {
  margin: 0 -3px;
}
.topicwrap .replyvisit span:nth-child(3) {
  color: #b4b4b4;
}
.topicwrap .putgood,
.topicwrap .puttop,
.topicwrap .putnormal {
  color: #fff;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;
}
.topicwrap .putnormal {
  background-color: #e5e5e5;
  color: #999;
}
.topicwrap .puttop,
.topicwrap .putgood {
  background-color: #80bd01;
  color: #fff;
}

.topicwrap .title {
  text-overflow: ellipsis;
}
.topicwrap .replylast {
  float: right;
  font-size: 14px;
}
</style>