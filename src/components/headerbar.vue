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
      <div class="menu" @click="changeState">
        <img src="../assets/menu.png" alt>
      </div>
      <div class="minnav">
        <ul>
          <li>
            <a href="#">新手</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">关于</a>
          </li>
          <li>
            <a href="#">注册</a>
          </li>
          <li>
            <a href="#">登录</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "headerbar",
  methods: {
    changeState() {
      $(".menu").click(() => {
        $(".minnav").toggleClass("active");
        console.log("11");
      });
    }
  }
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
  position: relative;
}
.logo img {
  width: 120px;
  height: 28px;
}
.searchinput {
  flex-grow: 2;
  padding-left: 20px;
}
.searchinput input {
  height: 25px;
  outline: none;
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
.menu {
  display: flex;
  align-content: center;
  margin-left: 2%;
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
.minnav {
  position: absolute;
  display: none;
  top: 100%;
  right: -4%;
  color: white;
  background-color: #888888;
  opacity: 0.6;
  width: 12%;
  text-align: center;
  transition: all 0.5s;
  border-radius: 0 0 3px 3px;
}
.minnav ul li {
  cursor: pointer;
  padding: 2px 5px;
}
@media only screen and (min-width: 0px) and (max-width: 414px) {
  nav {
    display: none;
  }
  .minnav.active {
    display: block;
  }
  .menu {
    display: flex;
  }
}
@media screen and (min-width: 415px) {
  .minnav {
    display: none;
  }
  nav {
    display: flex;
  }
  .menu {
    display: none;
  }
}
</style>