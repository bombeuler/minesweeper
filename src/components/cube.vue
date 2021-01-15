<template>
  <div class="cube" @click.left="openCube" @click.right="makeFlag">
    {{ content }}
  </div>
</template>

<script>
const chart = new Map([
  [0, "😄"],
  [1, "1️⃣"],
  [2, "2️⃣"],
  [3, "3️⃣"],
  [4, "4️⃣"],
  [5, "5️⃣"],
  [6, "6️⃣"],
  [7, "7️⃣"],
  [8, "8️⃣"],
  [-1, "💣"],
]);

export default {
  name: "cube",
  props: {
    number: Number,
    x: Number,
    y: Number,
  },
  data() {
    return {
      status: false,
      content: "⬜️",
    };
  },
  methods: {
    makeFlag() {
      if (this.content === "⬜️") {
        this.content = "🚩";
      } else if (this.content === "🚩") {
        this.content = "❓";
      } else if (this.content === "❓") {
        this.content = "⬜️";
      }
    },
    openCube() {
      if (!this.status) {
        this.status = true;
        this.content = chart.get(this.number);
        this.$emit("open", {
          x: this.x,
          y: this.y,
          number: this.number,
        });
      }
    },
  },
};
</script>

<style >
.cube {
  padding: 0.4px;
  cursor: pointer;
}
</style>

