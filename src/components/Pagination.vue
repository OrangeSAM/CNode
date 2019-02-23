<template>
  <div class="pagination">
    <div class="wrap">
      <span @click="changeBtn">首页</span>
      <span @click="changeBtn">上一页</span>
      <span v-if="judge">...</span>
      <span
        v-for="(btn,index) in pagebtns"
        :key="index"
        :class="[{curtPage:btn==curtPage},'pagebtn']"
        @click="changeBtn(btn)"
      >{{btn}}</span>
      <span @click="changeBtn">下一页</span>
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
      // let btn = document.querySelectorAll(".pagination span");
      // let curt = document.querySelector("span.curtPage");
      if (typeof page != "number") {
        //   console.log(page.target.innerText);
        //   switch (page.target.innerText) {
        //     case "上一页":
        //       console.log(curt.innerText);
        //       this.changeBtn(Number(curt.innerText) - 1);
        //       console.log("上一页");
        //       break;
        //     case "下一页":
        //       console.log(curt.innerText);
        //       this.changeBtn(Number(curt.innerText) + 1);
        //       console.log("下一页");
        //       break;
        //     case "首页":
        //       console.log(curt);
        //       console.log(curt.innerText);
        //       this.changeBtn(1);
        //       break;
        //   }
        switch (page.target.innerText) {
          case "上一页":
            $("span.curtPage")
              .prev()
              .click();
            break;
          case "下一页":
            $("span.curtPage")
              .next()
              .click();
            break;
          case "首页":
            this.pagebtns = [1, 2, 3, 4, 5, "..."];
            this.changeBtn(1);
            break;
          default:
            break;
        }
        return;
      }
      this.curtPage = page;
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
}
.wrap .pagebtn {
  padding: 0 5px;
  color: #778087;
}
.wrap .pagebtn:nth-child(6) {
  cursor: not-allowed;
}
.wrap .curtPage {
  color: #80bd01;
}
</style>