<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="USER.name"
      :ghost="false"
      :sub-title="USER.desc"
    >
      <template #extra>
        <a-button key="1">History</a-button>
        <a-button key="2" type="primary" @click="logout">Logout</a-button>
      </template>
    </a-page-header>
    <div class="container-503">
      <a-card
        class="link-503"
        v-for="(v, k) in config"
        :key="`503-${k}`"
      >
        <template #title>
          <div>
            <a :href="`https://${v.link}`" target="_blank"><h1 style="display: inline;">{{ v.title }}</h1></a>
            <a-icon type="plus-square" style="padding-left: 10px"/>
          </div>
        </template>
        <a-card-grid
          v-for="(cv, ck) in v.children"
          :key="`503-${v.title}-${ck}`"
          style="width: 100%">
          <a-card
            class="card-item"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <a-card-meta>
              <template #title>
                <a :href="cv.direct ? cv.link : `https://${v.link}${cv.link}`" target="_blank">
                  <a-icon :type="cv.icon"/>
                  <span class="cv-title">{{ cv.title }}</span>
                </a>
              </template>
              <template #description>
                <div>
                  <a-tag
                    v-for="(v, k) in cv.tags"
                    :key="`tags-${k}`"
                    :color="randomTag()"
                  >{{ v }}
                  </a-tag>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-card-grid>
      </a-card>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'

const tags = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple']
let tagId = 0

export default {
  name: "ShowLayout",
  created() {
    this.getDataAndRefresh()
  },
  data() {
    return {
      config: []
    }
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
    },
    randomTag() {
      if (tagId === tags.length) tagId = 0
      return tags[tagId++]
    },
    getDataAndRefresh() {
      axios.get('/td.json').then(value => {
        this.config = value.data
      })
    }
  }
}
</script>

<style scoped lang="less">
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

  overflow: auto;
}

.card-item {
  text-align: left;
}

.cv-title {
  margin-left: 3%;
  color: #2c3e50;

  &:hover {
    color: #3da678;
  }
}
</style>
