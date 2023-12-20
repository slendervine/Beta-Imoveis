   
   //Função utilizada para cadastrar os Estados no SQL Server
   
    async function cadastraEstados(){

        const todosEstados = await getEstados();

        CreatePost(todosEstados.data)

    }

    function CreatePost(todosEstados) {

        const baseURL = "https://localhost:1900/"
        api
        .post(`${baseURL}cadastrarEstados`, todosEstados )
        .then((response) => {
            alert(response.data)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }