import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, options = {}) => {  
    const response = await request.get(path, options);  // option is param 2coup key-val
    return response.data; 
}

export default request;