<template>
  <div>
    {{ obj.name }}
    <button @click="handleClick">change</button>

    <input type="text" v-model="obj.text" ref="mytextref">
    <button @click="addClick">Add</button>
    <ul>
      <li v-for="item in obj.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  setup() {
    const obj = reactive({
      name: 'mrzyd',
      text: '',
      list: []
    })

    const mytextref = ref()  //创建ref对象

    const handleClick = () => {
      obj.name = 'xiaoming'
      console.log(mytextref.value.value)
    }

    const addClick = () => {
      obj.list.push(obj.text)
      obj.text = ''
    }

    return {
      obj,
      handleClick,
      mytextref,
      addClick
    }
  }
}
</script>