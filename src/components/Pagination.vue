<template>
  <div class>
    <button>首页</button>
    <button>上一页</button>
    <!-- <button v-for="btns in pagebtns"></button> -->
    <button>下一页</button>
  </div>
</template>


<script>
export default {
  name: "pagination",
  data() {
    return {
      pagebtns: [1, 2, 3, 4, 5, "...."],
      curtPage: 1
    };
  }
};
</script>


<style scoped>
</style>