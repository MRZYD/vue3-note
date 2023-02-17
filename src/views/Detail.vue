<template>
  <div>
    detail
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {

    }
  },
  mounted(){
    this.$store.commit("hide")
    console.log(this.$route.query)
  },

  unmounted() {
    this.$store.commit("show")
  },
}
</script>