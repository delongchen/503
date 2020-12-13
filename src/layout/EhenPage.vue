<template>
  <div>
    <button @click="handleClick">get</button>
    <div>{{ text }}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "EhenPage",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions('eh', ['GetAllEh']),
    handleClick() {
      this.GetAllEh().then(value => {
        this.text = value
      })
    }
  }
}
</script>

<style scoped>

</style>
