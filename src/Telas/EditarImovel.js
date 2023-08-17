import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Card, Form, Row, Col, Button, Table, Stack, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

import SelectParametrado from "../Options/SelectParametrado";





function EditarImovel() {
    const [recordset, setRecordset] = React.useState(null);  
    const [formData, setFormData]   = useState({});
    const params = useParams();

    console.log(params)

    console.log(params.id)

    let ID_IMOVEL = params.id


    useEffect(() => {
        api
            .get(`http://localhost:1900/consulta_imovel/${ID_IMOVEL}`)
            .then((response) => {
                setRecordset(response.data)
            })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

    },  []);

    if (!recordset) return null;
    const retornoAPI = recordset?.recordset









    return ( 
        <>
        <Card className="mb-5 mt-5">
            <Card.Header as="h5" className="text-center">Editar Imóvel</Card.Header>
            <Card.Body>
                <Card>
                    <Card.Header as="h5" className="text-center">Dados Gerais</Card.Header>
                    <Card.Body>

                        <Stack direction="horizontal" gap={3}>
                            <Stack direction="vertical" gap={3} className="col-md-4">
                                <div>
                                    <Form.Label htmlFor="valorLocacao">Descrição Imóvel</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <Form.Control id="valorLocacao" value={retornoAPI[0].DESCRICAO_TITULO_IMOVEL} />
                                    </InputGroup>
                                </div>
                            </Stack>
                        </Stack>

                        <Stack direction="horizontal" gap={3}>
                            <Stack direction="vertical" gap={3} className="col-md-4">
                                <div>
                                    <Form.Label>Finalidade do Imóvel</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Locação</option>
                                        <option>Venda</option>
                                    </Form.Select>
                                </div>

                                <div>
                                    <Form.Label>Tipo do Imóvel</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Casa</option>
                                        <option>Apartamento</option>
                                        <option>Sala Comercial</option>
                                    </Form.Select>
                                </div>
                            </Stack>

                            <Stack direction="vertical" gap={3} className="col-md-4">

                                

                                <div>
                                    <SelectParametrado metodo="SELECT_FINALIDADE_IMOVEL" label="Finalidade do Imóvel"/>
                                </div>

                                <div>
                                    <Form.Label>Tipo do Imóvel</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Casa</option>
                                        <option>Apartamento</option>
                                        <option>Sala Comercial</option>
                                    </Form.Select>
                                </div>
                            </Stack>
                        </Stack>
                    </Card.Body>
                </Card>

                <Card className="mt-3">
                    <Card.Header as="h5" className="text-center">Dados Financeiros</Card.Header>
                    <Card.Body>
                        <Stack direction="horizontal" gap={3}>
                            <Stack direction="vertical" gap={3} className="col-md-4">
                                <div>
                                    <Form.Label htmlFor="valorVenda">Valor Venda</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Text>R$</InputGroup.Text>
                                        <Form.Control id="valorVenda" placeholder="Valor para venda do imovel..." value={retornoAPI[0].VALOR_IMOVEL} />
                                    </InputGroup>
                                </div>

                                <div>
                                    <Form.Label>Finalidade do Imóvel</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Locação</option>
                                        <option>Venda</option>
                                    </Form.Select>
                                </div>
                            </Stack>

                            <Stack direction="vertical" gap={3} className="col-md-4">
                                <div>
                                    <Form.Label htmlFor="valorLocacao">Valor Locação</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Text>R$</InputGroup.Text>
                                        <Form.Control id="valorLocacao" placeholder="Valor para aluguel do imovel..." value={retornoAPI[0].VALOR_LOCACAO_IMOVEL} />
                                    </InputGroup>
                                </div>

                                <div>
                                    <Form.Label>Tipo do Imóvel</Form.Label>
                                    <Form.Select size="sm">
                                        <option>Casa</option>
                                        <option>Apartamento</option>
                                        <option>Sala Comercial</option>
                                    </Form.Select>
                                </div>
                            </Stack>
                        </Stack>

                        <Row className="mt-3">
                            <Col>
                                <Form.Label htmlFor="valorLocacao">Valor Locação</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>Contato para Venda</InputGroup.Text>
                                    <Form.Control id="Input_formaContatoImovel"  placeholder="Melhor contato comercial..." value={retornoAPI[0].MELHOR_CONTATO} />
                                    
                                    <Form.Control aria-label="Aos cuidados de:" id="Input_nomeContatoImovel"   placeholder="Aos cuidados de:" value={retornoAPI[0].NOME_MELHOR_CONTATO} />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Observações Financeiras</Form.Label>
                                    <Form.Control id="obsFinanceiras" as="textarea" rows={3} value={retornoAPI[0].OBS_FINANCEIRAS} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>



                <Card className="mt-3">
                    <Card.Header as="h5" className="text-center">Endereço do Imóvel</Card.Header>
                    <Card.Body>

                        
                        <Card className="mt-3 mb-3">
                            <Card.Header as="h5" className="text-center">Condomínio/Prédio</Card.Header>
                            <Card.Body>

                            <Form.Group className="mb-1 mt-1">
                                <Form.Label>Condomínio</Form.Label>
                                <Form.Select size="sm">
                                    <option>Residencial Tantofaz Silva</option>
                                    <option>Condomínio São Foda-se</option>
                                </Form.Select>
                            </Form.Group>

                            </Card.Body>
                        </Card>

                        <Stack direction="horizontal" gap={3}>
                            <Stack direction="vertical" gap={3} className="col-md-4">
                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>CEP</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Número</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Logradouro</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Complemento</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group className="mb-1" controlId="formBasicEmail">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Select size="sm">
                                            <option>Rio Grande do Sul</option>
                                            <option>São Paulo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Stack>
                        </Stack>

                    </Card.Body>
                </Card>
                


            </Card.Body>
        </Card>
        </>
            
   
  )};


  export default EditarImovel;