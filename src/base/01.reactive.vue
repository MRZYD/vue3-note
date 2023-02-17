<template>
  <div>
    {{ obj.name }}
    <button @click="handleClick">change</button>

    <input type="text" v-model="obj.text">
    <button @click="addClick">Add</button>
    <ul>
      <li v-for="item in obj.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup() {
    const obj = reactive({
      name: 'mrzyd',
      text: '',
      list: []
    })

    const handleClick = () => {
      obj.name = 'xiaoming'
    }

    const addClick = () => {
      obj.list.push(obj.text)
      obj.text = ''
    }

    return {
      obj,
      handleClick,
      addClick
    }
  }
}
</script>