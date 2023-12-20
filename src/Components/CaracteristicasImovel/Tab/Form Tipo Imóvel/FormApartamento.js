import { Form, Row, Col, InputGroup, Container} from 'react-bootstrap';
import React, { useState } from 'react';
import SelectParametrado from '../../../../Options/SelectParametrado';



function FormApartamento({ formData, setFormData }) {

    function alteraCheckboxCondominio(statusCheck) { 

        if(statusCheck){

            setFormData({...formData, 
                checkboxCondominio: statusCheck,
                nomePredio: "" 
            })

        }else{

            setFormData({...formData, 
                checkboxCondominio: statusCheck,
                nomeCondominio: "" 
            })
        }

    }; 

    return ( 
        <>     
            <Row>
                <Col>
                    <SelectParametrado metodo="SELECT_CONDOMINIOS" label="Condomínio" tipoLabel="normal" value={formData.idCondominio} setFormData={setFormData} formData={formData} />
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
