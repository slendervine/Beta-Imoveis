import api from "./api";

export async function getDadosCondominio(idCondominio) {

    const [recordset, setRecordset] = null;  


        api
            .get(`http://localhost:1900/consulta_condominio/${idCondominio}`)
            .then((response) => {
                setRecordset(response.data)
            })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });


}
