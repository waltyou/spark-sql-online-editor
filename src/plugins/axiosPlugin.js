import axios from 'axios'
import {
  Message
} from 'element-ui'

// axios config
axios.defaults.baseURL = '/api'

const Axios = axios.create({
  baseURL: '/', // remember to do reverse proxy
  timeout: 10000,
  responseType: 'json',
  // set withCredentials to true will make axios send request with cookie
  withCredentials: true
})

// request interceptor
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Message({
      showClose: true,
      message: error.data.err_msg ? error.data.err_msg : error.data,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default Axios
