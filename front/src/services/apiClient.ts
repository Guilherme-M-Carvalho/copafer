import axios from 'axios'
import { apiUrl } from './apiUrl'
import Cookies from 'js-cookie';

export function setupAPIClient(){
    const cookies = Cookies.get('copafer.token')

    const api = axios.create({
        baseURL: `${apiUrl}/api`,
        headers: {
            Authorization: `Bearer ${cookies}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error) => {
        if(error.response.status === 401){
            const win = window as any
            //deslogar
            Cookies.remove('copafer.token')
            win.location = '/'
        }
        return Promise.reject(error)
    })

    return api;
}