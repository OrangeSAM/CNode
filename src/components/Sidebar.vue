<template>
  <div class="side">
    <div>
      <div class="sideTopTitle">作者</div>
      <div class="sideTopDetail">
        <router-link :to="{name:'user_info',params:{name:userinfo.loginname}}">
          <img :src="userinfo.avatar_url" alt="用户头像">
        </router-link>
        <span>{{userinfo.loginname}}</span>
        <div>积分:{{userinfo.score}}</div>
      </div>
    </div>
    <div>
      <div class="sideTopicTitle">作者其他话题</div>
      <ul class="sideTopicDetail">
        <li v-for="recentPubTopic in pubtopiclimit5" :key="recentPubTopic.id">
          <div class="topicwrap">
            <router-link
              :to="{name:'post_content',params:{id:recentPubTopic.id,name:recentPubTopic.author.loginname}}"
            >
              <span class="title">{{recentPubTopic.title}}</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div class="sideJoinTitle">作者最近回复</div>
      <ul class="sideJoinDetail">
        <li v-for="recentJoinTopic in jointopiclimit5" :key="recentJoinTopic.id">
          <div class="topicwrap">
            <router-link
              :to="{name:'post_content',params:{id:recentJoinTopic.id,name:recentJoinTopic.author.loginname}}"
            >
              <span class="title">{{recentJoinTopic.title}}</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "sidebar",
  data() {
    return {
      userinfo: {}
    };
  },
  computed: {
    pubtopiclimit5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      } else {
        return this.userinfo.recent_topics;
      }
    },
    jointopiclimit5() {
      if (this.userinfo.recent_replies) {
        this.userinfo.recent_replies.slice(0, 5);
      } else {
        return this.userinfo.recent_replies;
      }
    }
  },
  methods: {
    //由于侧边栏所在的页面的是文章详情页，所以在由文章列表页点击过来的时候还需要传递username参数
    getSideInfo() {
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
    this.getSideInfo();
  }
};
</script>


<style scoped>
.side {
  flex: 1;
  margin-left: 4%;
}
.sideTopTitle,
.sideTopicTitle,
.sideJoinTitle {
  color: #51585c;
  border-radius: 3px 3px 0 0;
  padding: 10px;
  background-color: #f6f6f6;
}
.sideTopDetail,
.sideTopicDetail,
.sideJoinDetail {
  padding: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  margin-bottom: 13px;
  font-size: 14px;
}
.sideTopicDetail li,
.sideJoinDetail li {
  line-height: 2em;
  color: #778087;
}
.sideTopDetail img {
  width: 48px;
  height: 48px;
  border-radius: 3px;
}
</style>