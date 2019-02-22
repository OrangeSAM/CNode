<template>
  <div class="post">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.png" alt>
    </div>
    <div class="postlist" v-else>
      <nav>
        <span>全部</span>
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
              :class="[{put_good:(post.good==true),put_top:(post.top==true),tempname:(post.good!=true&& post.top!=true)}]"
            >{{post.tab|formatTopicType}}</span>
            <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
              <span class="title">{{post.title}}</span>
            </router-link>
            <span>{{post.last_reply_at|formatDate}}</span>
          </div>
        </li>
        <li>
          <pagination></pagination>
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
      posts: []
    };
  },
  components: {
    pagination
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(response => {
          this.isLoading = false;
          this.posts = response.data.data;
        })
        .catch(err => {});
    }
  },
  beforeMount() {
    this.isLoading = true; //加载成功之前显示加载动画
    this.getData(); //页面加载前获取数据
  }
};
</script>


<style scoped>
.post {
  background-color: #ffffff;
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
  color: #80bd01;
}
.postlist nav span.active {
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
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
  color: #9e78c0;
}
.topicwrap .replyvisit span:nth-child(2) {
  margin: 0 -3px;
}
.topicwrap .replyvisit span:nth-child(3) {
  color: #b4b4b4;
}
.topicwrap .put_good,
.put_top {
  background-color: #80bd01;
  color: #fff;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;
}
.topicwrap .title {
  text-overflow: ellipsis;
}
</style>