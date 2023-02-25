import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Col, Row } from 'react-bootstrap';

import DadosFinanceirosImovelInfo from './DadosFinanceirosImovel.js';
import LocalizacaoImovelInfo from './LocalizacaoImovel.js';
import CaracteristicaImovelInfo from './CaracteristicasImovel/CaracteristicasImovel';
import SandboxInfo from './Sandbox.js';


function handleClick(dataFormulario) {
    
    console.log("clicks")
    // Send data to the backend via POST
    fetch('http://localhost:1900/textos/', {  // Enter your IP address here

      method: 'GET', 
      mode: 'cors', 

    })

}

function MeuForm(){
    const [page, setPage]           = useState(0);
    const [progress, setProgress]   = useState(0);
    const [formData, setFormData]   = useState({

    });
    

    
    const FormTitulos = ["Dados Financeiros do Imóvel", "Características do Imóvel", "Localização do Imóvel", "SANDBOX"];

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
