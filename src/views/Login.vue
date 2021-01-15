<template>
  <div class="login">
    <input type="text" v-model="username" placeholder="请输入用户名" />
    <button @click="login">进入</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      if (this.username.length) {
        localStorage.setItem("username", this.username.trim());
        console.log(localStorage.getItem("username"));
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style>
.login {
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  box-shadow: 0 0 1px black;
  margin-top: 100px;
}
</style>