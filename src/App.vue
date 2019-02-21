<template>
  <div id="app">
    <headerbar></headerbar>
    <div class="main">
      <postlist></postlist>
    </div>
  </div>
</template>

<script>
import headerbar from "./components/headerbar";
import postlist from "./components/postlist";
export default {
  name: "App",
  components: {
    headerbar,
    postlist
  }
};
</script>

<style>
.main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
}
</style>
