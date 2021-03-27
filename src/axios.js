import axios from 'axios'

const instance = axios.create ({
    baseURL: 'http://localhost:5001/clone-8406c/us-central1/api' // The API (Cloud function) url
})

export default instance;