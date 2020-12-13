<template>
  <div class="wel-card"
       @mouseout="hovered = false"
       @mouseover="hovered = true">
    <div style="margin: auto; font-size: 3rem">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelCard",
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
