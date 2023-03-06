<template>
  <div>
    nowplaying
    <ul>
      <li v-for="item in datalist" :key="item.filmId" @click="handleChangePage(item.filmId)">
        {{ item.name }}
        {{ actorFilrer(item.actors) }}
      </li>
    </ul>
  </div>
</template>

// <script>
// import axios from 'axios'
// export default {
//   data() {
//     return {
//       datalist: []
//     }
//   }, 
//   mounted() {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2552176',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16732355392037828837965825","bc":"440300"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     }).then(res => {
//       console.log(res.data.data.films)
//       this.datalist = res.data.data.films
//     })
//   },
//   methods: {
//     handleChangePage(id) {
//       this.$router.push({
//         path: '/detail',
//         query: {
//           id: id
//         },
//       })
//     },

//     actorFilrer(actor){
//       if (actor === undefined) return '暂无主演'
//       return actor.map((item) => item.name).join(' ')
//     }
    
//   }
// } 
// </script>

<script setup>
import axios from 'axios'
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router';

// const obj = reactive({
//   datalist: []
// })
const datalist = ref([])
const router = useRouter()

onMounted(() => {
  axios({
    url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2552176',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16732355392037828837965825","bc":"440300"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  }).then(res => {
    console.log(res.data.data.films)
    // obj.datalist = res.data.data.films 
    datalist.value = res.data.data.films
  })
})

const handleChangePage = (id) => {
  router.push({
    path: '/detail',
    query: {
      id: id
    },
  })
}

const actorFilrer = (actor) => {
  if (actor === undefined) return '暂无主演'
  return actor.map((item) => item.name).join(' ')
}
</script>
