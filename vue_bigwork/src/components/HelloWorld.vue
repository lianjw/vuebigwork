<template>
  <div class="hello">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <router-link to="/cart">这是购物车(杰)</router-link>
    <br/>
    <router-link to="/details">这是详情页(威)</router-link>
    <br/>
    <router-link to="/details">这是订单页(杰)</router-link>
    <br/>
    <router-link to="/index">这是首页(龙)</router-link>
    <br/>
    <router-link to="/login">这是登录页(赖)</router-link>
    <br/>
    <router-link to="/register">这是注册页(赖)</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
