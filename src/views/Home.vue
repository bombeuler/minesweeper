<template>
  <div>
    <span>用户名：{{ username }}</span>
    <board :x-num="20" :y-num="15" :bombs="30" />
    <!-- <div class="board" v-if="game">
      <div class="line" v-for="(itemLine, i) in boardArr" :key="i">
        <cube
          :number="item"
          :ref="`q${i}and${j}`"
          v-for="(item, j) in itemLine"
          :x="i"
          :y="j"
          @open="cubeOpen"
          :key="`${i}-${j}`"
        />
      </div>
    </div>
    <div v-else>游戏结束</div>
  </div> -->
  </div>
</template>

<script>
import Board from "../components/board";
import { make2dArr, random2d } from "../untils/index.js";

export default {
  name: "Home",
  components: { board: Board },
  data() {
    return {
      username: localStorage.getItem("username"),
      people: 1,
      // game: true,
      // xNum: 10,
      // yNum: 10,
      // bombs: 10,
      // boardArr: [],
    };
  },
  created() {
    // this.initBoardArr(this.xNum, this.yNum, this.bombs);
  },
  // methods: {
  //   initBoardArr(xNum, yNum, bombs) {
  //     let boardArr = make2dArr(xNum, yNum, 0);
  //     for (let nBombs = 0; nBombs < bombs; nBombs++) {
  //       let flag = false;
  //       while (!flag) {
  //         let [m, n] = random2d(xNum, yNum);
  //         if (boardArr[m][n] !== -1) {
  //           boardArr[m][n] = -1;
  //           for (
  //             let r = m > 0 ? m - 1 : m;
  //             r <= (m < xNum - 1 ? m + 1 : m);
  //             r++
  //           ) {
  //             for (
  //               let g = n > 0 ? n - 1 : n;
  //               g <= (n < yNum - 1 ? n + 1 : n);
  //               g++
  //             ) {
  //               if (boardArr[r][g] !== -1) {
  //                 boardArr[r][g]++;
  //               }
  //             }
  //           }
  //           flag = true;
  //         }
  //       }
  //     }
  //     console.log(boardArr);
  //     this.boardArr = boardArr;
  //   },
  //   cubeOpen(e) {
  //     console.log(e);
  //     const { x, y, number } = e;
  //     if (number === -1) {
  //       setTimeout(() => {
  //         this.$refs[`q${x}and${y}`][0].content = "💥";
  //       }, 300);

  //       setTimeout(() => {
  //         this.game = false;
  //       }, 500);
  //     } else if (number === 0) {
  //       if (x - 1 >= 0) {
  //         this.$refs[`q${x - 1}and${y}`][0].openCube();
  //         if (y - 1 >= 0) {
  //           this.$refs[`q${x - 1}and${y - 1}`][0].openCube();
  //           this.$refs[`q${x}and${y - 1}`][0].openCube();
  //         }
  //         if (y + 1 < this.yNum) {
  //           this.$refs[`q${x - 1}and${y + 1}`][0].openCube();
  //           this.$refs[`q${x}and${y + 1}`][0].openCube();
  //         }
  //       }
  //       if (x + 1 < this.xNum) {
  //         this.$refs[`q${x + 1}and${y}`][0].openCube();
  //         if (y - 1 >= 0) {
  //           this.$refs[`q${x + 1}and${y - 1}`][0].openCube();
  //           this.$refs[`q${x}and${y - 1}`][0].openCube();
  //         }
  //         if (y + 1 < this.yNum) {
  //           this.$refs[`q${x + 1}and${y + 1}`][0].openCube();
  //           this.$refs[`q${x}and${y + 1}`][0].openCube();
  //         }
  //       }
  //     }
  //   },
  // },
};
</script>

<style >
.board {
  display: flex;
}
</style>