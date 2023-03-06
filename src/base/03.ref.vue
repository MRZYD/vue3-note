<template>
  <div>
    hello - ref 写法
    {{ myname }}
    <button @click="handleClick">change</button>

    <input type="text" ref="text">
    <button @click="addClick">Add</button>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    const myname = ref('mrzyd')  // .value  属性
    const text = ref()
    const list = ref([])

    const handleClick = () => {
      myname.value = 'xiaoming'
    }

    const addClick = () => {
      list.value.push(text.value.value)
      text.value = ''
    }


    return {
      handleClick,
      addClick,
      myname,
      text,
      list
    }
  }
}
</script>