import storage from 'store'
import { users } from "@/components/main/users";
import {
  USER_ID
} from '@/store/const-types'

const user = {
  namespaced: true,
  state: {
    id: null
  },
  mutations: {
    [USER_ID]: (state, id) => {
      state.id = id
      storage.set(USER_ID, id)
    }
  },
  getters: {
    USER(state) {
      return users[state.id]
    }
  }
}

export default user