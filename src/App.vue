<template>
  <div id="nav" v-hello>
    <div v-show="$store.state.isTabbarShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/film">film</router-link> |
      <router-link to="/cinema">cinema</router-link> |
      <router-link to="/center">center</router-link>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  data() {
    return{

    }
  },
  //自定义指令
  directives: {
    hello: {
      mounted() {
        console.log("mounted")
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
