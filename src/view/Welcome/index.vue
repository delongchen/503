<template>
  <div class="container">
    <wel-card>eh</wel-card>
    <wel-card>login</wel-card>
  </div>
</template>

<script>
import WelCard from "@/view/Welcome/WelCard";

export default {
  name: "welcome",
  components: { WelCard }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}
</style>
