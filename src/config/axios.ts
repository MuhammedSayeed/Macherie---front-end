import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    withCredentials: true,
    timeout: 20000
})

export default axiosInstance;