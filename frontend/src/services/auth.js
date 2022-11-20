// import instance from './axiosConfig'
import axios from 'axios';
const baseURL = 'https://test-applet-5.herokuapp.com/api/v1/'

export const login = async(payload) => {
    
    const response = await axios.post(`${baseURL}auths/signup`, payload);
    try {
        console.log(response)
        return response.data
    } catch (error) {
        return error
    }
}

export const signin = async(payload) => {
    
    const response = await axios.post(`${baseURL}auths/signin`, payload);
    try {
        console.log(response)
        return response.data
    } catch (error) {
        return error
    }
}