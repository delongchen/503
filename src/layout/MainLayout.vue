<template>
  <div class="main-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped>
.main-layout {
  width: 100%;
  height: 100%;
  background-color: #3da678;
}
</style>