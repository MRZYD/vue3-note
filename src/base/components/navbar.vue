<template>
  <div>
    <button @click="handleClick">show</button>
  </div>
</template>

<script>
export default {
  props: ['myname', 'myid'],
  setup(props, {emit}){
    console.log(props)
    const handleClick = () => {
      let isShow = true
      emit('event')
    }

    return {
      handleClick
    }
  }
}
</script>