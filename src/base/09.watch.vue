<template>
  <div>
    <input type="text" v-model="obj.mytext">
    <input type="number" v-model="obj.mynum">
    <ul>
      <li v-for="item in obj.datalist" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'watch'
}
</script>

<script setup>
import {watch, reactive} from 'vue'

const obj = reactive({
  oldlist: ['aaa','abc','bcc','acc','abc'],
  mytext: '',
  mynum: '',
  datalist: ['aaa','abc','bcc','acc','abc'],
}) 

watch(
  () => obj.mytext,
  (newVal, oldVal) => {
    console.log('newVal ' + newVal + ' oldVal ' + oldVal)
    obj.datalist = obj.oldlist.filter(item => item.includes(newVal))
  }
)

// 同时监听mytext和mynum，只要mytext或者mynum其中一个值变化，就会触发下面的方法
// watch(
//   () => [obj.mytext, obj.mynum],
//   ([newMytext, newMynum],[oldMytext, oldMynum]) => {
//   console.log('我是新的user值'+newMytext);
//   console.log('我是旧的的user值'+oldMytext);
//   console.log('我是新的pass值'+newMynum);
//   console.log('我是旧的的pass值'+oldMynum);
// })
</script>