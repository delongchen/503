<template>
  <div class="wel-card"
       @click="$router.push({path: to})"
       @mouseout="hovered = false"
       @mouseover="hovered = true">
    <div style="margin: auto; font-size: 3rem">
      {{ title }}
    </div>
  </div>
</template>

<script>
const REQ_STR = {
  type: String,
  required: true
}

export default {
  name: "WelCard",
  props:{
    title: REQ_STR,
    to: REQ_STR
  },
  data() {
    return {
      hovered: false
    }
  },
  watch: {
    hovered(value) {
      requestAnimationFrame(() => {
        this.$el.style.boxShadow = value ? '3px 3px 5px #2c3e50' : ''
      })
    }
  },
}
</script>

<style scoped>
.wel-card {
  height: 50%;
  width: 30%;
  background-color: white;
  margin: auto;
  border-radius: 5px;

  display: flex;
}
</style>
