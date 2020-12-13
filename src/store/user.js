import storage from 'store'
import { users } from "@/components/main/users";
import {login, getData, gatherClick} from '@/api/login'
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
  },
  actions: {
    async Login({ commit }, id) {
      const response = await login({ action: 'login', payload: id })
      if (response.status === 1) {
        commit('id', response.data)
        return response
      } else throw new Error("bad req")
    },
    async GetData() {
      const response = await getData()
      if (response.status === 1) return response.data
      else throw new Error("bad req")
    },
    async GatherClick(context, info) {
      const result = await gatherClick({actions: 'gather', payload: info})
      if (result.status === 1) return result
      else throw new Error("bad gather")
    }
  }
}

export default user
