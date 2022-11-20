import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'development' ? process.env.BACK_END_URL : process.env.PROD_BACK_END_URL
})

instance.interceptors.request.use()
instance.interceptors.response.use()



export default instance;