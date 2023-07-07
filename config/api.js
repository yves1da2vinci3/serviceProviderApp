import axios from "axios"


const httpClient  = axios.create({ 
    baseURL : "http://192.168.1.151:3000/api"
})

export default httpClient

export const apiUrl ="http://192.168.1.151:3000"
// export const apiUrl ="http://localhost:3000"