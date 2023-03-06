<template>
  <div>
    <input type="text" v-model="obj.mytext">
    <ul>
      <li v-for="item in computedList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'computed'
}
</script>

<script setup>
  import {computed, reactive} from 'vue'

  const obj = reactive({
    datalist: ['aaa','abc','bcc','acc','abc'],
    mytext: '',
  })

  const filterlist = () => {
    console.log(obj.mytext)
    return obj.datalist.filter(item => item.includes(obj.mytext))
  }

  const computedList = computed(() => {
    return obj.datalist.filter(item => item.includes(obj.mytext))
  })
</script>