import {createApi} from './util'

const {get} = createApi({prefix: '/3333'})

export const getAllEh = get('/')
export const getByType = type => get(`/types?type=${type}`)
