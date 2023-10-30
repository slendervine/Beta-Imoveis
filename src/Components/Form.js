import React, { useState } from 'react';
import axios from 'axios';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Col, Row } from 'react-bootstrap';

import DadosFinanceirosImovelInfo from './DadosFinanceirosImovel.js';
import LocalizacaoImovelInfo from './LocalizacaoImovel.js';
import CaracteristicaImovelInfo from './CaracteristicasImovel/CaracteristicasImovel';
import SandboxInfo from './Sandbox.js';



function MeuForm(){
    const [page, setPage]           = useState(0);
    const [progress, setProgress]   = useState(0);
    const [formData, setFormData]   = useState({
        placeholderFormaContatoImovel: "Selecione o tipo de contato.",
        titleFormaContatoImovel: "Contato",
        nomePredio: "",
        nomeCondominio: "",
        checkboxCondominio: false
    });
    
    const [post, setPost]           = React.useState(null);

    const baseURL = "https://localhost:1900/imovel/cadastrar"
    
    function createPost() {
        axios
          .post(baseURL, {
            body: formData
        })
          .then((response) => {
            setPost(response.data);
        });
    }
    
    const FormTitulos = ["Dados Financeiros do Imóvel", "Características do Imóvel", "Localização do Imóvel"];

    const Display = () => {

        if(page === 0){
            return <DadosFinanceirosImovelInfo formData={formData} setFormData={setFormData} />
        }

        if(page === 1){
            return <CaracteristicaImovelInfo formData={formData} setFormData={setFormData} />
        }

        if(page === 2){
            return <LocalizacaoImovelInfo formData={formData} setFormData={setFormData} />
        }

        if(page === 3){
            return <SandboxInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className=" form">
            <div className="progressbar"></div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitulos[page]}</h1>
                </div>

                <ProgressBar animated now={progress} />
                <br />

                <div className="body">{Display()}</div>
                <br />

                <div className=" footer">
                    <Row sm={2}>
                        <Col>
                            <Button 
                            disabled = {page === 0}
                            onClick={() => {
                                setPage((currPage)      => currPage - 1);
                                setProgress((progress)  => progress - 33,3);
                            }}
                            > Anterior
                            </Button>
                        </Col>
                        
                        <Col>
                            <Button 
                                onClick={() => {
                                    if(page === FormTitulos.length - 1){
                                        console.log(formData);
                                        createPost(formData)
                                    } else {
                                        setPage((currPage)      => currPage + 1);
                                        setProgress((progress)  => progress + 33,3);
                                    }
                                }}
                            > {page === FormTitulos.length - 1 ? "Cadastrar!" : "Próximo"}
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )};

export default MeuForm;
