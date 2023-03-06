<template>
  <div>
    detail
  </div>
</template>

// <script>
// // import axios from 'axios';
// export default {
//   data() {
//     return {

//     }
//   },
//   mounted(){
//     this.$store.commit("hide")
//     console.log(this.$route.query)
//   },

//   unmounted() {
//     this.$store.commit("show")
//   },
// }
// </script>

<script setup>
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { useStore } from 'vuex';
const store = useStore();
onMounted(() => {
  store.commit("hide")
})

onUnmounted(() => {
  store.commit("show")
})
</script>