import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.107:3000',
  timeout: 6000
})

axiosInstance.interceptors.response.use(value => {
  return value.data
})

function installer(Vue) {
  Vue.prototype.$http = axiosInstance
}

export {
  axiosInstance as axios,
  installer as VueAxios
}
