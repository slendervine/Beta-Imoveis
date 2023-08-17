import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:1900/consulta_imoveis",
});

export default api;
