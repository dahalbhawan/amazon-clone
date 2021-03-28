import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://us-central1-clone-8406c.cloudfunctions.net/api' // The API (Cloud function) url
    // local -> 'http://localhost:5001/clone-8406c/us-central1/api'
})

export default instance;