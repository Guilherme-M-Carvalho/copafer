import axios from "axios"

export function setupApiCep(){

    const apiCep = axios.create({
        baseURL: `https://viacep.com.br/ws/`,
    })

    return apiCep
    
}

export const apiCep = setupApiCep()