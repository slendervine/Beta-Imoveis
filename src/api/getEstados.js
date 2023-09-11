import axios from "axios";

export async function getEstados(){

    return axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .catch(e => console.log(e))

}