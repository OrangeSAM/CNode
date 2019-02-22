<template>
  <div>
    <div>
      <div>作者</div>
      <div>
        <img :src="userinfo.avatar_url" alt="用户头像">
        <span>{{userinfo.loginname}}</span>
        <span>积分{{userinfo.githubUsername}}</span>
      </div>
    </div>
    <div>
      <div>作者其他话题</div>
      <ul>
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
      <div>作者最近回复</div>
      <ul>
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
  name: "Slidebar",
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
    getSlideInfo() {
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
    this.getSlideInfo();
  }
};
</script>


<style scoped>
</style>