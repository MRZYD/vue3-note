<template>
  <div>
    <ul>
      <li v-for="item in obj1.list" :key="item.name">{{ item.name }}</li>
    </ul>

    <ul>
      <li v-for="item in obj2.list" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getData1, getData2 } from './app.js'
export default {
  name: 'hooks'
}
</script>

<script setup>
  const obj1 = getData1()
  const obj2 = getData2()
</script>