<template>
  <div>
    <!-- 名字 头像 github  注册时间 积分 -->
    <!-- basic detail -->
    <div>
      <img :src="userinfo.avatar_url" alt="用户头像">
      <span>{{userinfo.loginname}}</span>
      <span>{{userinfo.githubUsername}}</span>
      <span>积分{{userinfo.githubUsername}}</span>
      <span>注册于{{userinfo.create_at|formatDate}}</span>
    </div>
    <!-- recent topics -->
    <div>
      <div>最近创建的话题</div>
      <ul>
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
            <router-link :to="{name:'post_content',params:{id:recentPubTopic.id}}">
              <span class="title">{{recentPubTopic.title}}</span>
            </router-link>
            <span>{{recentPubTopic.last_reply_at|formatDate}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- recent replies -->
    <div>
      <div>最近参与的话题</div>
      <ul>
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
            <router-link :to="{name:'post_content',params:{id:recentJoinTopic.id}}">
              <span class="title">{{recentJoinTopic.title}}</span>
            </router-link>
            <span>{{recentJoinTopic.last_reply_at|formatDate}}</span>
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
</style>