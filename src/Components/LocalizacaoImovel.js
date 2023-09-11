import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { getCep } from '../api/getCep';
import { getEstados } from '../api/getEstados';
import { useEffect } from 'react';
import api from '../services/api';
import SelectParametrado from '../Options/SelectParametrado';




function LocalizacaoImovel({ formData, setFormData }) {

    

    async function buscaCEP(cep){

      
      cep = cep.replace('-', '')
      //setFormData({...formData, imovelCep: cep })
      
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
            <SelectParametrado metodo="SELECT_ESTADOS" label="Estado" tipoLabel="float"/>
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
