import axios from "axios"
import { baseURL } from "../config/api"

export const getTask = () => {
       return axios.get(baseURL).then(res => res.data)

}

export const addTask = (data:any) => {
    
}