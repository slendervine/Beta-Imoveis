import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, Button, Table } from "react-bootstrap";

import api from "../services/api";


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}



function ConsultaImoveis() {

    const [recordset, setRecordset] = React.useState(null);  
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);
    

    useEffect(() => {
        api
            .get("http://localhost:1900/consulta")
            .then((response) => {
                setRecordset(response.data)
            })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

    },  []);

    if (!recordset) return null;

    const retornoAPI = recordset?.recordset
    console.log(retornoAPI);

    function minhaFuncao(ID_IMOVEL){
        console.log(ID_IMOVEL);
    }



    return ( 
        <>
        <Card className="mt-3">
            <Card.Header as="h5" className="text-left">{recordset?.recordset[0].DESCRICAO_TITULO_IMOVEL}</Card.Header>
                
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição ou título do imóvel..." />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>Tipo de Imóvel</Form.Label>
                                <Form.Select>
                                    <option>Casa</option>
                                    <option>Apartamento</option>
                                    <option>Sala Comercial</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>Proprietário</Form.Label>
                                <Form.Control type="text" placeholder="Pesquise pelo proprietário..." />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col sm={10}></Col>
                        <Col sm={2}><Button  type="submit" variant="primary">Pesquisar</Button></Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className="mt-5">
            <Card.Header as="h5" className="text-center">Imóveis Cadastrados</Card.Header>

            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descrição</th>
                            <th>Tipo Imóvel</th>
                            <th>Finalidade</th>
                            <th>Cidade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                    {retornoAPI.map(retornoAPI => 
                        <tr key={retornoAPI.ID_IMOVEL}>
                            <th>{retornoAPI.ID_IMOVEL}</th>
                            <th>{retornoAPI.DESCRICAO_TITULO_IMOVEL}</th>
                            <th>{retornoAPI.DESC_TIPO_IMOVEL}</th>
                            <th>{retornoAPI.FINALIDADE_IMOVEL}</th>
                            <th>{retornoAPI.DESC_MUNICIPIO}</th>
                            <th align="center">
                                <Button 
                                    variant="primary" 
                                    size="sm"
                                    disabled={isLoading}
                                    onClick={!isLoading ? handleClick : null}
                                    href={'/editar_imovel/'+retornoAPI.ID_IMOVEL}
                                >
                                    {isLoading ? 'Carregando...' : 'Editar'}
                                </Button>
                            </th>
                        </tr>
                    )} 

                        
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
            
        </>   
  )};


  export default ConsultaImoveis;