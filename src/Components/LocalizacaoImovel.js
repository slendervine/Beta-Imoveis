import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap';




function LocalizacaoImovel({ formData, setFormData }) {
    return ( 
        <>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="labelImovelCep" label="CEP">
              <Form.Control id="imovelCep" type="text" placeholder="00000-000" value={formData.labelImovelCep} 
                onChange={(event) => setFormData({...formData, labelImovelCep: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="labelImovelNumero" label="Número">
              <Form.Control id="imovelNumero" type="text" placeholder="1846" value={formData.labelImovelNumero} 
                onChange={(event) => setFormData({...formData, labelImovelNumero: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="labelImovelComplemento" label="Complemento">
              <Form.Control id="imovelComplemento" type="text" placeholder="00000-000" value={formData.labelImovelComplemento} 
                onChange={(event) => setFormData({...formData, labelImovelComplemento: event.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
        <br />

        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="labelImovelBairro" label="Bairro" >
              <Form.Control id="imovelBairro" type="text" value={formData.labelImovelBairro} 
                onChange={(event) => setFormData({...formData, labelImovelBairro: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="labelImovelCidade" label="Cidade">
              <Form.Control id="imovelCidade" type="text" value={formData.labelImovelCidade} 
                onChange={(event) => setFormData({...formData, labelImovelCidade: event.target.value })}/>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="labelImovelUF" label="Estado">
              <Form.Select id="imovelUF" aria-label="Floating label select example">
                <option>Selecione...</option>
                <option value="1">São Paulo</option>
                <option value="2">Rio Grande do Sul</option>
                <option value="3">Rio de Janeiro</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </>
  
  )};


  export default LocalizacaoImovel;
