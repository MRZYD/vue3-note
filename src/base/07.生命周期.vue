<template>
  <div>
    生命周期

    <ul>
      <li v-for="item in obj.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { onBeforeMount, onMounted, reactive } from '@vue/runtime-core'
export default {
  setup() {

    const obj = reactive({
      list: []
    })

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('dom上树')
      setTimeout(() => {
        obj.list = [111,222,333]
      }, 2000)
    })

    return {
      obj
    }
  }
}
</script>