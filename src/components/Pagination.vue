<template>
  <div class="pagination">
    <div class="wrap">
      <span @click="changeBtn(1)">首页</span>
      <!-- <span @click="changeBtn(curtPage>1?curtPage-1:1)">上一页</span> -->
      <span @click="changeBtn(curtPage-1)">上一页</span>
      <span v-if="judge">...</span>
      <span
        v-for="(btn,index) in pagebtns"
        :key="index"
        :class="[{curtPage:btn==curtPage},'pagebtn']"
        @click="changeBtn(btn)"
      >{{btn}}</span>
      <span @click="changeBtn(curtPage+1)">下一页</span>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "pagination",
  data() {
    return {
      pagebtns: [1, 2, 3, 4, 5, "...."],
      curtPage: 1,
      judge: false
    };
  },
  methods: {
    changeBtn(page) {
      //这部分使用原生实现，但功能尚有问题
      // let btn = document.querySelectorAll(".pagination span");
      // let curt = document.querySelector("span.curtPage");
      // if (typeof page != "number") {
      //   console.log(page.target.innerText);
      //   switch (page.target.innerText) {
      //     case "上一页":
      //       this.changeBtn(Number(curt.innerText) - 1);console.log("上一页");
      //       break;
      //     case "下一页":
      //       this.changeBtn(Number(curt.innerText) + 1);break;
      //     case "首页":
      //       this.changeBtn(1);break;
      //   }

      // switch (page.target.innerText) {
      //     case "上一页":
      //       $("span.curtPage").prev().click();
      //       break;
      //     case "下一页":
      //       $("span.curtPage").next().click();
      //       break;
      //     case "首页":
      //       this.pagebtns = [1, 2, 3, 4, 5, "..."];
      //       this.changeBtn(1);
      //       break;
      //     default:
      //       break;
      //   }
      //   return;
      // }
      this.curtPage = page;
      if (page == 0) {
        this.curtPage = 1;
        $(this.pagebtns[0]).addClass("curtPage");
      }
      if (page > 4) {
        this.judge = true;
      } else {
        this.judge = false;
      }
      if (page == this.pagebtns[4]) {
        this.pagebtns.shift();
        this.pagebtns.splice(4, 0, this.pagebtns[3] + 1);
      } else if (page == this.pagebtns[0] && page != 1) {
        this.pagebtns.unshift(this.pagebtns[0] - 1);
        this.pagebtns.splice(5, 1);
      }
      this.$emit("handle", this.curtPage);
    }
  }
};
</script>


<style scoped>
.wrap {
  padding: 10px;
  border: 1px solid #f6f6f6;
}
.wrap span {
  font-size: 14px;
  cursor: pointer;
  padding: 3px;
}
.wrap .pagebtn {
  padding: 0 5px;
  color: #778087;
}
.wrap span:hover {
  background-color: #e4e4e4;
  border-radius: 3px;
}
.wrap .pagebtn:nth-child(8) {
  cursor: not-allowed;
}
.wrap .curtPage {
  color: #80bd01;
}
</style>