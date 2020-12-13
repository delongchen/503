import {createApi} from './util'

const {get, post} = createApi({prefix: '/3000'})

export const login = post('/auth/login')
export const getData = get('/data')
export const gatherClick = post('/auth/gather')
