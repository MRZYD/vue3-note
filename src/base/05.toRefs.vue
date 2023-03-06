<template>
  <div>
    {{ name }}
    <button @click="handleClick">change</button>

    <input type="text" v-model="text" ref="mytextref">
    <button @click="addClick">Add</button>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
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
      ...toRefs(obj),
      handleClick,
      mytextref,
      addClick
    }
  }
}
</script>