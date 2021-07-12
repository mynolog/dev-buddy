import axios from 'axios'

const tokenArray = document.cookie.split('=')
const accessToken = tokenArray[1]

const api = axios.create({
  baseUrl: '//localhost:4040/api'
})
api.defaults.headers.common['Authorization'] = accessToken

export default api
