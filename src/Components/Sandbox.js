import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap';




function Sandbox({ formData, setFormData }) {
    return ( 
        <>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="TituloSandbox" label="Título">
              <Form.Control id="imovelCep" type="text"  value={formData.TituloSandbox} 
                onChange={(event) => setFormData({...formData, TituloSandbox: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="autorSandbox" label="Autor">
              <Form.Control id="imovelNumero" type="text" placeholder="1846" value={formData.autorSandbox} 
                onChange={(event) => setFormData({...formData, autorSandbox: event.target.value })} />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="categoriaSandbox" label="Categoria">
              <Form.Select id="imovelUF" aria-label="Floating label select example" value={formData.categoriaSandbox}
                onChange={(e) => setFormData({...formData, categoriaSandbox: e.target.value } ) }
              >
                <option>Selecione...</option>
                <option value="1">Teste1</option>
                <option value="2">Teste2</option>
                <option value="3">Teste3</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <br />

        <Row className="g-2">
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Text Sandbox né</Form.Label>
            <Form.Control id="textoSandbox" as="textarea" rows={3} value={formData.textoSandbox} 
               onChange={(event) => setFormData({...formData, textoSandbox: event.target.value })}/>
          </Form.Group>
        </Col>
        </Row>
      </>
  
  )};


  export default Sandbox;
