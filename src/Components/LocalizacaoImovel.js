import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { getCep } from '../api/getCep';
import { useEffect } from 'react';
import api from '../services/api';
import React from 'react';




function LocalizacaoImovel({ formData, setFormData }) {

    const [recordset, setRecordset] = React.useState(null);

    useEffect(() => {
        api
            .get(`http://localhost:1900/select_options/SELECT_ESTADOS`)
            .then((response) => {
                setRecordset(response.data)
            })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

    },  []);

    if (!recordset) return null;
    const retornoAPI = recordset?.recordset

    async function buscaCEP(cep){

      cep = cep.replace('-', '')
      
      if(cep.length == 8){
        
        const enderecoCompleto = await getCep(cep)
        const erro = enderecoCompleto.data.erro;

        if(erro){

          alert("CEP não encontrado!")

          setFormData({ ...formData,
            imovelCep: "",
            imovelBairro: "",
            imovelCidade: "",
            imovelEndereco: "",
          })

          document.getElementById("imovelCep").focus()

        }else{

          setFormData({ ...formData,
            imovelCep: cep,
            imovelBairro: enderecoCompleto.data.bairro,
            imovelCidade: enderecoCompleto.data.localidade,
            imovelEndereco: enderecoCompleto.data.logradouro,
            imovelEstado: enderecoCompleto.data.uf,
          })

          document.getElementById("imovelNumero").focus()
        }

      }

    }


    return ( 
        <>
        <Row className="g-2">
          <Col md>
            <FloatingLabel label="CEP">
              <Form.Control id="imovelCep" type="text" value={formData.imovelCep} 
                onChange={(event) => buscaCEP(event.target.value)} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel label="Número">
              <Form.Control id="imovelNumero" type="text" value={formData.imovelNumero} 
                onChange={(event) => setFormData({...formData, labelImovelNumero: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel label="Complemento">
              <Form.Control id="imovelComplemento" type="text" value={formData.imovelComplemento} 
                onChange={(event) => setFormData({...formData, labelImovelComplemento: event.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
        <br />

        <Row className="g-2">
          <Col md>
            <FloatingLabel label="Bairro" >
              <Form.Control id="imovelBairro" type="text" value={formData.imovelBairro} 
                onChange={(event) => setFormData({...formData, imovelBairro: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel label="Cidade">
              <Form.Control id="imovelCidade" type="text" value={formData.imovelCidade} 
                onChange={(event) => setFormData({...formData, imovelCidade: event.target.value })}/>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel label="Estado">
              <Form.Select id="imovelUF" value={formData.imovelEstado} 
                onChange={(event) => setFormData({...formData, imovelEstado: event.target.value })}>
                  <option value="0" selected>Selecione...</option>
                  {retornoAPI.map(retornoAPI => 
                      <option value={retornoAPI.Sigla}>{retornoAPI.Descricao}</option>
                  )} 
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <br />

        <Row className="g-2">
          <Col md>
            <FloatingLabel label="Endereco">
              <Form.Control id="imovelEndereco" type="text" value={formData.imovelEndereco} 
                onChange={(event) => setFormData({...formData, imovelEndereco: event.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
      </>
  
  )};


  export default LocalizacaoImovel;
