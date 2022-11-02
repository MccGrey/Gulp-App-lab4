import instance from './axiosConfig'


export const login = async(payload) => {
    const response = await instance.post('auths/signup', payload);
    try {
        return response.data
    } catch (error) {
        return error
    }
}