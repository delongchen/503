<template>
  <div class="container">
    <wel-card title="EH" to="/eh"/>
    <wel-card title="LOGIN" to="/login"/>
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
