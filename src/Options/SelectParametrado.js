import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Card, Form, Row, Col, Button, Table, Stack, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";

function Selectarametrado({metodo, label}) {

    const [recordset, setRecordset] = React.useState(null);

    useEffect(() => {
        api
            .get(`http://localhost:1900/select_options/${metodo}`)
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
        <Form.Label>{label}</Form.Label>
        <Form.Select size="sm">
            {retornoAPI.map(retornoAPI => 
                <option value={retornoAPI.ID_FINALIDADE_IMOVEL}>{retornoAPI.DESCRICAO}</option>
            )} 
        </Form.Select>
        </>
  
  )};


  export default Selectarametrado;
