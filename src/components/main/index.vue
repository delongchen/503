<template>
  <div class="login">
    <div class="users-title">Who are you</div>
    <div class="users-card">
      <a-card
        v-for="(v, k) in users"
        :key="`user-${k}`"
        @click="handleClick(k)"
        hoverable
        style="width: 300px"
        class="user-bt">
        <img
          slot="cover"
          alt="example"
          :src="`dicks/timg${k}.gif`"
        />
        <a-card-meta :title="v.name" :description="v.desc" />
      </a-card>
    </div>
  </div>
</template>

<script>
import {users} from "@/components/main/users";

export default {
  name: "MainPage",
  created() {
    this.users = users
  },
  methods: {
    handleClick(id) {
      this.$store.commit('user/id', id)
      this.$router.push('/503')
    }
  }
}
</script>

<style scoped>
.login {
  width: 60%;
  height: 70%;
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 3px 3px 5px #2c3e50;

  display: flex;
  flex-direction: column;
}

.users-card {
  padding-top: 10%;
  display: flex;
}

.users-title {
  padding-top: 10%;
  font-size: 200%;
}

.user-bt {
  margin: 0 auto;
}
</style>