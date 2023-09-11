import axios from "axios";


const CadastrarImoveisAxios = axios.create({
    baseURL: "http://localhost:1900/cadastrarImoveis",
});

export default CadastrarImoveisAxios;
