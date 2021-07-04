import axios from 'axios'

const api = axios.create({
  baseUrl: '//localhost:4040/api'
})

export default api
