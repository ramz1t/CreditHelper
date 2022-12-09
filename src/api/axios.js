import axios from "axios";

export default axios.create({
    baseURL: 'https://credithelperbackend-production.up.railway.app'
    // baseURL: 'http://127.0.0.1:8000/'
})