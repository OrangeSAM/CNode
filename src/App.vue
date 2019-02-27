<template>
  <div id="app">
    <headerbar></headerbar>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="side"></router-view>
    </div>
  </div>
</template>

<script>
import Headerbar from "./components/Headerbar";
import Postlist from "./components/Postlist";

export default {
  name: "App",
  components: {
    Headerbar,
    Postlist
  }
};
</script>

<style>
#app {
  background-color: #e1e1e1;
}
.main {
  margin: 15px auto;
  padding: 0 5%;
  min-height: 400px;
  display: flex;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
