<template>
  <div class="headerout">
    <div class="headerwrap">
      <div class="logo">
        <router-link :to="{name:'root'}">
          <img src="../assets/cnodejs_light.svg" alt="cnode">
        </router-link>
      </div>
      <div class="searchinput">
        <input type="text">
      </div>
      <nav>
        <span>
          <a href="#">首页</a>
        </span>
        <span>
          <a href="#">新手入门</a>
        </span>
        <span>
          <a href="#">API</a>
        </span>
        <span>
          <a href="#">关于</a>
        </span>
        <span>
          <a href="#">注册</a>
        </span>
        <span>
          <a href="#">登录</a>
        </span>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: "headerbar"
};
</script>


<style scoped>
.headerout {
  background-color: #444;
}
.headerwrap {
  width: 90%;
  font-size: 13px;
  margin: 0 auto;
  display: flex;
  padding: 9px 0;
}

.searchinput {
  flex-grow: 2;
  padding-left: 20px;
}
.searchinput input {
  height: 25px;
  outline: none;
  padding-left: 25px;
  border: 0;
  border-radius: 15px;
  background: url(../assets/search.png) 4px 4px no-repeat #888;
  vertical-align: -webkit-baseline-middle;
  margin-top: 3px;
  transition: all 0.6s;
}
.searchinput input:hover {
  background-color: #ffffff;
}
img {
  width: 120px;
  height: 28px;
}
a {
  text-decoration: none;
  color: inherit;
}
nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav a {
  color: #ccc;
  text-shadow: none;
}
nav a:hover {
  color: #fff;
}
</style>