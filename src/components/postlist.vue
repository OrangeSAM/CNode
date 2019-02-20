<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.png" alt>
    </div>
  </div>
</template>


<script>
export default {
  name: "postlist",
  data() {
    return {
      isLoading: true
    };
  }
};
</script>


<style scoped>
</style>