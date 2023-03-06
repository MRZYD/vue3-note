<template>
  <div>
    <navBar myname="mrzyd" myid="123412" @event="change"></navBar>
    <div v-if="show">
      123412423142
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import navBar from './components/navbar.vue'
export default {
  components: {
    navBar
  },
  setup(){
    const obj = reactive({
      show: false
    })

    const change = () => {
      obj.show = !obj.show
    }

    return {
      ...toRefs(obj),
      change
    }
  }
}
</script>