<template>
  <div class="userinfo">
    <!-- 名字 头像 github  注册时间 积分 -->
    <!-- basic detail -->
    <div class="infoTop">
      <div class="infoTopTitle">主页</div>
      <div class="infoTopDetail">
        <img :src="userinfo.avatar_url" alt="用户头像">
        <span>{{userinfo.loginname}}</span>
        <div>
          <span>{{userinfo.githubUsername}}</span>
          <span>积分:{{userinfo.score}}</span>
          <!-- <span>注册于{{userinfo.create_at|formatDate}}</span> -->
        </div>
      </div>
    </div>
    <!-- recent topics -->
    <div class="infoTopic">
      <div class="infoTopicTitle">最近创建的话题</div>
      <ul class="infoTopicDetail">
        <li v-for="recentPubTopic in userinfo.recent_topics" :key="recentPubTopic.id">
          <div class="topicwrap">
            <img :src="recentPubTopic.author.avatar_url" alt="头像" class="avator">
            <!-- <span class="replyvisit">
              <span title="回复数">{{post.reply_count}}</span>
              <span>/</span>
              <span title="浏览数">{{post.visit_count}}</span>
            </span>-->
            <!-- 涉及到对话题的另一个请求，暂且搁置 -->
            <!-- <span
              :class="[{put_good:(userinfo.good==true),put_top:(userinfo.top==true),tempname:(post.good!=true&& post.top!=true)}]"
            >{{post.tab|formatTopicType}}</span>-->
            <router-link
              :to="{name:'post_content',params:{id:recentPubTopic.id,name:userinfo.loginname}}"
            >
              <span class="title">{{recentPubTopic.title}}</span>
            </router-link>
            <!-- <span>{{recentPubTopic.last_reply_at|formatDate}}</span> -->
          </div>
        </li>
      </ul>
    </div>
    <!-- recent replies -->
    <div class="infoJoin">
      <div class="infoJoinTitle">最近参与的话题</div>
      <ul class="infoTopicDetail">
        <li v-for="recentJoinTopic in userinfo.recent_replies" :key="recentJoinTopic.id">
          <div class="topicwrap">
            <img :src="recentJoinTopic.author.avatar_url" alt="头像" class="avator">
            <!-- <span class="replyvisit">
              <span title="回复数">{{post.reply_count}}</span>
              <span>/</span>
              <span title="浏览数">{{post.visit_count}}</span>
            </span>-->
            <!-- 涉及到对话题的另一个请求，暂且搁置 -->
            <!-- <span
              :class="[{put_good:(userinfo.good==true),put_top:(userinfo.top==true),tempname:(post.good!=true&& post.top!=true)}]"
            >{{post.tab|formatTopicType}}</span>-->
            <router-link
              :to="{name:'post_content',params:{id:recentJoinTopic.id,name:userinfo.loginname}}"
            >
              <span class="title">{{recentJoinTopic.title}}</span>
            </router-link>
            <!-- <span>{{recentJoinTopic.last_reply_at|formatDate}}</span> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "Userinfo",
  data() {
    return {
      userinfo: {}
    };
  },
  methods: {
    getUserInfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(result => {
          if (result.data.success) {
            this.userinfo = result.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getUserInfo();
  }
};
</script>


<style scoped>
.userinfo {
  width: 100%;
}
.userinfo a {
  color: #08c;
}

.infoTopTitle,
.infoTopicTitle,
.infoJoinTitle {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.infoTop,
.infoTopic,
.infoJoin {
  margin-bottom: 13px;
}
.infoTopDetail,
.infoTopicDetail,
.infoJoinDetail {
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.infoTopDetail {
  padding: 10px;
}

.infoTopicDetail .topicwrap,
.infoJoinDetail .topicwrap {
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.infoTopDetail img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.infoTopicDetail img,
.infoJoinDetail img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>