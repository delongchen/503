import { router } from '@/router'
//import store from '@/store'
import storage from 'store'

function toLogin(path) {
  return path === '/login'
}

const whiteList = ['/login']

router.beforeEach(((to, from, next) => {
  const id = storage.get('id')
  const logged = !((id === undefined) || (id === null))
  if (logged) {
    if (toLogin(to.path)) next('/503')
    else next()
  } else {
    if (whiteList.includes(to.path)) next()
    else next({path: '/login'})
  }
}))
