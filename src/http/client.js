import axios from "axios";

const clientAxios = axios.create({
    baseURL: "https://66698ae32e964a6dfed59006.mockapi.io",
    headers: {
        "Content-Type": " application/json"
    }
})


export default clientAxios;