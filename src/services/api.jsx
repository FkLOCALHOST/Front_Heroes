import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3005/heroesApi/v1",
    timeout: 3000,
    httpAgent: false
})

export const getHeroes = async() =>{
    try{
        return await apiClient.get("/heroes/listHeroes")
    }catch(e){
        return{
            error: true,
            message: e.message
        }
    }
}

export const getHeroesById = async(id) =>{
    try{
        return await apiClient.get(`/heroes/getHeroeById/${id}`)
    }catch(e){
        return{
            error: true,
            message: e.message
        }
    }
}