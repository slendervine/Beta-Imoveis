import { Form, Row, Col, InputGroup } from 'react-bootstrap';


function TabComodos({ formData, setFormData }) {
    return ( 
        <>
        <Row className="mb-1">
            <Form.Group as={Col}>
                <Form.Label>Material</Form.Label>
                <Form.Select id="materialImovel" aria-label="Material" value={formData.materialImovel} 
                onChange={(event) => setFormData({...formData, materialImovel: event.target.value })}>
                    <option>Selecione...</option>
                    <option value="1">Madeira</option>
                    <option value="2">Material</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} >
                <Form.Label>Tamanho Terreno</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control id="tamanhoTerreno" value={formData.tamanhoTerreno}
                    onChange={(event) => setFormData({...formData, tamanhoTerreno: event.target.value })}
                    placeholder="225,00"
                    aria-label=""
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">mº</InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Tamanho Área Construída</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control id="tamanhoAreaConstruida" value={formData.tamanhoAreaConstruida}
                    onChange={(event) => setFormData({...formData, tamanhoAreaConstruida: event.target.value })}
                    placeholder="225,00"
                    aria-label=""
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">mº</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </Row>
        <hr />



      </>
  )};


  export default TabComodos;
