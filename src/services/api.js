import APIURL from './config'
import trae from 'trae'

const api = trae.create({
  baseUrl: APIURL,
})

export default api