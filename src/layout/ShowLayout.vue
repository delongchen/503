<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="USER.name"
      :ghost="false"
      :sub-title="USER.desc"
      @back="logout"
    />
    <div class="container-503">
      <a-card
        class="link-503"
        v-for="(v, k) in config"
        :key="`503-${k}`"
        hoverable
      >
        <a-card-grid style="width: 100%">
          <a-card
            title="dasda"
            style="border: 0">
            asda
          </a-card>
        </a-card-grid>
      </a-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config503 from '@/config/503'

export default {
  name: "ShowLayout",
  created() {
    this.config = config503
  },
  computed: {
    ...mapGetters('user', [
      'USER'
    ])
  },
  methods: {
    logout() {
      this.$store.commit('user/id', null)
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
.container-503 {
  display: flex;
  width: 100%;
  position: absolute;
  top: 5%;
  bottom: 0;
}

.link-503 {
  height: 85%;
  width: 20%;
  margin: auto;
}
</style>