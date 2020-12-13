import { axios } from '@/utils/axios'

const default_conf = {
  prefix: null,
}

export function createApi(config = default_conf) {
  const prefix = `${config.prefix || ''}`
  const getURL = path => prefix + path

  function post(path) {
    return (parameter) => axios({
      url: getURL(path),
      method: 'post',
      data: parameter
    })
  }

  function get(path) {
    return () => axios({
      url: getURL(path),
      method: 'get'
    })
  }

  return {
    post, get
  }
}