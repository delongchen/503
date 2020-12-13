import { axios } from '@/utils/axios'

const userApi = {
  Login: '/auth/login',
  Data: '/data',
  Gather: '/auth/gather'
}

export function login(parameter) {
  return axios({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

export function getData() {
  return axios({
    url: userApi.Data,
    method: 'get'
  })
}

export function gatherClick(info) {
  return axios({
    url: userApi.Gather,
    method: 'post',
    data: info
  })
}
