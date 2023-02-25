import { Form, FloatingLabel } from 'react-bootstrap';
import React, { useState } from 'react';
import FormApartamentoInfo from './Form Tipo Imóvel/FormApartamento.js';
import FormCasaInfo from './Form Tipo Imóvel/FormCasa.js';



function TabSobreImovel({ formData, setFormData }) {

    const Display = (formDataSelecionado, { formData, setFormData } ) => {

        if(formDataSelecionado === "0"){
            return "Selecione..."
        }

        if(formDataSelecionado === "1"){
            return <FormCasaInfo />
        }

        if(formDataSelecionado === "2"){
            return <FormApartamentoInfo formData={formData} setFormData={setFormData} />
        }

        if(formDataSelecionado === "3"){
            return "Deu bom"
        }
    }


    return ( 
        <>  
            <FloatingLabel controlId="floatingSelect" label="Qual a pretenção para o imovel?">
                <Form.Select id="formSobreImovel" aria-label="Qual o tipo do imóvel" value={formData.formSobreImovel} 
                    onChange={(e) => setFormData({...formData, formSobreImovel: e.target.value } ) }
                >
                    <option>Selecione...</option>
                    <option value="1">Casa</option>
                    <option value="2">Apartamento</option>
                    <option value="3">Sala Comercial</option>
                </Form.Select>
            </FloatingLabel>
            <hr/>

            <div className="body">{Display(formData.formSobreImovel, { formData, setFormData })}</div>
      </>
  )};


  export default TabSobreImovel;
