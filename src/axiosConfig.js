import axios from 'axios'

axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/'

export default axios