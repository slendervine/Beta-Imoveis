import { Form, Row, Col, InputGroup, Container} from 'react-bootstrap';
import React, { useState } from 'react';



function FormApartamento({ formData, setFormData }) {

    const [checkCondominio, setCheckCondominio]           = useState(false);

    const handleChange = () => { 
        setFormData({...formData, checkboxCondominio: !checkCondominio })
        setCheckCondominio(!checkCondominio); 
    }; 

    return ( 
        <>     
            <Row>
                <Col>
                    <Form.Label>Nome do Prédio</Form.Label>
                    <Form.Control id="nomePredio" aria-label="Text input with checkbox" value={formData.nomePredio} 
                        onChange={(event) => setFormData({...formData, nomePredio: event.target.value })}
                        disabled    = {formData.checky} 
                        placeholder = "Ex: Mar Ligúria"
                    />                
                </Col>

                <Col>
                    <Form.Label>Condomínio</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox id="checkCondominio" aria-label="Checkbox for following text input"
                            onChange = { (event) => handleChange }  
                            checked = {formData.checkboxCondominio}/>

                        <Form.Control id="nomeCondominio" aria-label="Text input with checkbox" 
                            onChange={(event) => setFormData({...formData, nomeCondominio: event.target.value })}
                            disabled    = {!formData.checky} 
                            placeholder = "Ex: Condomínio Palaza"/>                
                    </InputGroup>
                </Col>
            </Row>
            
            <Container>
            <Row>
                <Col>
                    <Form.Label>Salão de Festas</Form.Label>
                    <Form.Check 
                        type="switch"
                        id="checkSalaoFesta"
                        onChange={(event) => setFormData({...formData, checkSalaoFesta: event.target.checked })}
                        checked = {formData.checkSalaoFesta}
                    />
                </Col>

                <Col>
                    <Form.Label>Piscina</Form.Label>
                    <Form.Check 
                        type="switch"
                        id="checkPiscina"
                        onChange={(event) => setFormData({...formData, checkPiscina: event.target.checked })}
                        checked = {formData.checkPiscina}
                        />
                </Col>

                <Col>
                    <Form.Label>Portaria</Form.Label>
                    <Form.Check 
                        type="switch"
                        id="checkPortaria"
                        onChange={(event) => setFormData({...formData, checkPortaria: event.target.checked })}
                        checked = {formData.checkPortaria}
                    />
                </Col>

                <Col>
                    <Form.Label>Elevador</Form.Label>
                    <Form.Check 
                        type="switch"
                        id="checkElevador"
                        onChange={(event) => setFormData({...formData, checkElevador: event.target.checked })}
                        checked = {formData.checkElevador}
                    />
                </Col>
            </Row>
            </Container>
        </>
  )};


  export default FormApartamento;
