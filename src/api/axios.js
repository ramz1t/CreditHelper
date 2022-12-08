import axios from "axios";

export default axios.create({
    baseURL: 'https://credithelper-backend.onrender.com'
    // baseURL: 'http://127.0.0.1:8000/'
})