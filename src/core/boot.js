import store from '@/store'
import storage from 'store'
import {
  USER_ID
} from '@/store/const-types'

export default function () {
  store.commit(`user/id`, storage.get(USER_ID, null))
  store.commit('eh/updateLast', storage.get('last', null))
}
