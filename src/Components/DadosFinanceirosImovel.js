import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

function formaContatoImovel(id){

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
  
    const inputAlterado       = document.querySelector("#Input_formaContatoImovel")
  
    inputAlterado.placeholder = placeholder
    inputAlterado.removeAttribute("disabled");
    inputAlterado.value = "";
    inputAlterado.focus();
  
}

function DadosFinanceirosImovel({ formData, setFormData }) {
    return ( 
      <>
      <Row>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Qual a pretenção para o imovel?">
            <Form.Select id="aluguelOuVendaImovel" aria-label="Qual a pretenção para o imovel?" value={formData.aluguelOuVendaImovel} 
              onChange={(event) => setFormData({...formData, aluguelOuVendaImovel: event.target.value })}>
              <option>Selecione...</option>
              <option value="1">Locação</option>
              <option value="2">Venda</option>
              <option value="3">Aberto a negociação</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <br />
      
      <Row>
        <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Text>R$</InputGroup.Text>
            <Form.Control id="valorMinimo" placeholder="Valor Mínimo" value={formData.valorMinimo} 
              onChange={(event) => setFormData({...formData, valorMinimo: event.target.value })} />
          </InputGroup>
        </Col>

        <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Text>R$</InputGroup.Text>
            <Form.Control id="valorMaximo" placeholder="Valor Máximo" value={formData.valorMaximo} 
              onChange={(event) => setFormData({...formData, valorMaximo: event.target.value })} />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col md>
          <InputGroup className="mb-3">
            <InputGroup.Text>R$</InputGroup.Text>
            <Form.Control id="valorExibidoSite" placeholder="Valor a ser exibido no site" value={formData.valorExibidoSite} 
              onChange={(event) => setFormData({...formData, valorExibidoSite: event.target.value })} />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputGroup className="mb-3">
            <DropdownButton  value={formData.ID_formaContatoImovel}
              variant="outline-secondary"
              title="Contato para venda"
              id="ID_formaContatoImovel" hadlerinput
              onChange={(event) => setFormData({...formData, ID_formaContatoImovel: event.target.value })}
            >
              <Dropdown.Item id="celular" onClick={e => formaContatoImovel(e.target.id)}>Celular</Dropdown.Item>
              <Dropdown.Item id="email"   onClick={e => formaContatoImovel(e.target.id)}>E-mail</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" id="Input_formaContatoImovel"  placeholder="Selecione o tipo de contato para venda" disabled value={formData.Input_formaContatoImovel}
              onChange={(event) => setFormData({...formData, Input_formaContatoImovel: event.target.value })} />
              
            <Form.Control aria-label="Aos cuidados de:" id="Input_nomeContatoImovel"   placeholder="Aos cuidados de:" value={formData.Input_nomeContatoImovel} 
              onChange={(event) => setFormData({...formData, Input_nomeContatoImovel: event.target.value })}/>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Observações Financeiras</Form.Label>
            <Form.Control id="obsFinanceiras" as="textarea" rows={3} value={formData.obsFinanceiras} 
               onChange={(event) => setFormData({...formData, obsFinanceiras: event.target.value })}/>
          </Form.Group>
        </Col>
      </Row>
      </>
  
  )};


  export default DadosFinanceirosImovel;
