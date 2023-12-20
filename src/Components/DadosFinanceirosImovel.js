import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { useState } from 'react';

function formaContatoImovel(id, value, formData, setDescInputTipoImovel){

    var placeholder = "";
  
    switch (id) {
      case 'celular':
        placeholder = "(00) 00000-0000";
        break;
      case 'email':
        placeholder = "exemplo@exemplo.com";
        break;
  
      default:
        placeholder = "";
    }

    formData.ID_formaContatoImovel = value;
  
    const inputAlterado       = document.querySelector("#Input_formaContatoImovel");
  
    inputAlterado.placeholder = placeholder;
    inputAlterado.removeAttribute("disabled");
    inputAlterado.focus();


    setDescInputTipoImovel(id);
  
}

function DadosFinanceirosImovel({ formData, setFormData }) {

    const [descInputTipoImovel, setDescInputTipoImovel] = useState("Contato")



    return ( 
      <>
      <Row>
        <Col md>
          <FloatingLabel  label="Qual a pretenção para o imovel?">
            <Form.Select id="aluguelOuVendaImovel" aria-label="Qual a pretenção para o imovel?" value={formData.aluguelOuVendaImovel} 
              onChange={(event) => setFormData({...formData, aluguelOuVendaImovel: event.target.value })}>
              <option value="0">Selecione...</option>
              <option value="1">Locação</option>
              <option value="2">Venda</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <br />
      
      <Row>

        <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Text>R$</InputGroup.Text>
            <Form.Control id="valorImovel" placeholder="Valor do imóvel." value={formData.valorImovel} 
              onChange={(event) => setFormData({...formData, valorImovel: event.target.value })} 
              as={InputMask}
              mask="9.999,99"/>
          </InputGroup>
        </Col>
        <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Text>R$</InputGroup.Text>
            <Form.Control id="valorMinimo" placeholder="Valor mínimo de negocição." value={formData.valorMinimo} 
              onChange={(event) => setFormData({...formData, valorMinimo: event.target.value })} 
              as={InputMask}
              mask="9.999,99"/>
          </InputGroup>
        </Col>

      </Row>

      <Row>
        <Col>
          <InputGroup className="mb-3">
            <DropdownButton 
              variant="outline-secondary"
              title={formData.titleFormaContatoImovel}
              id="ID_formaContatoImovel" 
            >
              <Dropdown.Item id="Celular" value="1" onClick={(e) =>  setFormData({...formData, ID_formaContatoImovel: e.target.id,  ...formData, titleFormaContatoImovel: e.target.id, formData, placeholderFormaContatoImovel: "(00)0 0000-0000"})}>Celular</Dropdown.Item>
              <Dropdown.Item id="Email"   value="2" onClick={(e) =>  setFormData({...formData, ID_formaContatoImovel: e.target.id,  ...formData, titleFormaContatoImovel: e.target.id, formData, placeholderFormaContatoImovel: "exemplo@exemplo.com"})}>E-mail</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" id="Input_formaContatoImovel"  placeholder={formData.placeholderFormaContatoImovel} disabled={formData.ID_formaContatoImovel === undefined} value={formData.Input_formaContatoImovel}
              onChange={(event) => setFormData({...formData, Input_formaContatoImovel: event.target.value })} />
              
            <Form.Control aria-label="Aos cuidados de:" id="Input_nomeContatoImovel"   placeholder="Aos cuidados de:" value={formData.Input_nomeContatoImovel} 
              onChange={(event) => setFormData({...formData, Input_nomeContatoImovel: event.target.value })}/>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Observações Financeiras</Form.Label>
            <Form.Control id="obsFinanceiras" as="textarea" rows={3} value={formData.obsFinanceiras} 
               onChange={(event) => setFormData({...formData, obsFinanceiras: event.target.value })}/>
          </Form.Group>
        </Col>
      </Row>
      </>
  
  )};


  export default DadosFinanceirosImovel;
