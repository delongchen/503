import {getAllEh} from '@/api/eh'

export default {
  namespaced: true,
  state: {
    last: ''
  },
  mutations: {
    updateLast: (state, cur) => state.last = cur
  },
  actions: {
    async GetAllEh() {
      const result = await getAllEh()
      return result
    }
  }
}
