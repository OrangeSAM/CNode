<template>
  <div class="articleWrap">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.png" alt>
    </div>
    <div v-else>
      <div>
        <!-- 左侧栏文章详情 -->
        <div class="articleUp">
          <div class="articleTitle">{{post.title}}</div>
          <div class="articleDetail">
            <span>发布于{{post.create_at|formatDate}}</span>
            <span>作者{{post.author.loginname}}</span>
            <span>{{post.visit_count}}次浏览</span>
            <span>来自{{post.tab|formatTopicType}}</span>
          </div>
        </div>
        <div class="article">
          <div v-html="post.content" class="articleContent"></div>
        </div>
        <div class="replies">
          <!-- 评论回复 -->
          <div class="replyCount">{{post.reply_count}}回复</div>
          <div>
            <ul>
              <li v-for="(comment,index) in replies" :key="comment.id">
                <div class="commentWrap">
                  <div class="authorAvatar">
                    <router-link :to="{name:'user_info',params:{name:comment.author.loginname}}">
                      <img :src="comment.author.avatar_url" alt>
                    </router-link>
                  </div>
                  <div>
                    <div class="commentDetailUp">
                      <span>{{comment.author.loginname}}</span>
                      <span>{{index+1}}楼</span>
                    </div>
                    <div v-html="comment.content" class="commentCont"></div>
                    <div class="commentDetailBot">
                      <span>{{comment.create_at|formatDate}}</span>
                      <span>
                        <span v-if="comment.ups.length > 0" class="commentup">
                          <img src="../assets/up.png" alt>
                        </span>
                        {{comment.ups.length>0?comment.ups.length:''}}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <!-- 右侧栏作者相关 -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: true,
      post: {
        //当前文章页的所有内容
      },
      replies: []
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(response => {
          if (response.data.success) {
            this.post = response.data.data;
            this.replies = response.data.data.replies;
            this.isLoading = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.getArticleData();
  },
  watch: {
    $route(to, from) {
      this.getArticleData();
    }
  }
};
</script>


<style>
@import url("../assets/markdown-github.css");

.articleWrap {
  flex: 2.5;
}
@media only screen and (min-width: 0px) and (max-width: 414px) {
  .articleWrap {
    width: 229px;
  }
}
.articleUp {
  border-bottom: 1px solid #e5e5e5;
  padding: 2%;
  background-color: #ffffff;
  border-radius: 3px 3px 0 0;
}
.articleTitle {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  line-height: 130%;
}

.articleDetail {
  font-size: 12px;
  color: #838383;
}
.articleDetail span::before {
  content: "•";
}
.article {
  background-color: #ffffff;
}
.articleContent {
  padding: 3% 6%;
  word-wrap: break-word;
}
.articleContent img {
  width: 100%;
}
.replies {
  margin-top: 13px;
  background-color: #ffffff;
}
.replyCount {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.commentWrap {
  display: flex;
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.commentWrap > div:nth-child(2) {
  width: 100%;
  margin-left: 15px;
}
.authorAvatar img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.commentDetailUp {
  display: flex;
  justify-content: space-between;
}
.commentCont {
  margin: 5px 0;
  word-break: break-all;
}
.commentCont img {
  width: 100%;
}

.commentCont a {
  color: #08c;
}
.commentDetailBot {
  display: flex;
  justify-content: space-between;
}
.commentDetailBot > span:nth-child(2) .commentup img {
  margin-bottom: -3px;
}

blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
}
.article a {
  color: #08c;
}
p {
  margin: 0;
  padding: 0;
}
</style>