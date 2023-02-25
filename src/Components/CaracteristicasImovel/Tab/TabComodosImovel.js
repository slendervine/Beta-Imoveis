import { Button, Form, Nav, Row, Col, InputGroup, DropdownButton, Tab } from 'react-bootstrap';


function TabComodos({ formData, setFormData }) {
    return ( 
        <>
        <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Quartos (sem banheiros)</Form.Label>
                <Form.Control id="quantQuartos" type="number" value={formData.quantQuartos}
                    onChange={(event) => setFormData({...formData, quantQuartos: event.target.value })} />
            </Form.Group>

            

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Banheiros</Form.Label>
                <Form.Control id="quantBanheiros" type="number" value={formData.quantBanheiros}
                    onChange={(event) => setFormData({...formData, quantBanheiros: event.target.value })} />
            </Form.Group>
        </Row>

        <hr />

        <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Cozinhas</Form.Label>
                <Form.Control id="quantCozinhas" type="number" value={formData.quantCozinhas} 
                    onChange={(event) => setFormData({...formData, quantCozinhas: event.target.value })} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Salas de Estar</Form.Label>
                <Form.Control id="quantSalasDeEstar" type="number" value={formData.quantSalasDeEstar} 
                    onChange={(event) => setFormData({...formData, quantSalasDeEstar: event.target.value })} />
            </Form.Group>
        </Row>
        <hr />

        <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Vagas de Garagens</Form.Label>
                <Form.Control id="quantVagasGaragem" type="number" value={formData.quantVagasGaragem} 
                    onChange={(event) => setFormData({...formData, quantVagasGaragem: event.target.value })}/>
            </Form.Group>
        </Row>

      </>
  )};


  export default TabComodos;
