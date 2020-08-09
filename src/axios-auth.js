import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-http-demo-1b3c3.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance