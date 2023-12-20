import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Card, Form, Row, Col, Button, Table, Stack, InputGroup, DropdownButton, Dropdown, FloatingLabel } from "react-bootstrap";
import { getDadosCondominio } from "../services/getDadosCondominio";

function SelectParametrado({metodo, label, tipoLabel, value, formData, setFormData}) {

    const [recordset, setRecordset] = React.useState(null);

    async function alteraCondominio(idCondominio){
        
        const dadosCondominio = await getDadosCondominio(idCondominio)

        console.log("dadosCondominio: ")
        console.log(dadosCondominio)

        setFormData({ ...formData,
            idCondominio: idCondominio,
            checkSalaoFesta: false,
            checkPiscina: false,
            checkPortaria: false,
            checkElevador: false,
        })

    }

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
        {tipoLabel == "normal" && 
            <div>
                <Form.Label>{label}</Form.Label>
                <Form.Select size="sm" value={value} onChange={ (e) => alteraCondominio(e.target.value) }>
                    <option value="0">Selecione...</option>
                    {retornoAPI.map(retornoAPI => 
                        <option value={retornoAPI.Id}>{retornoAPI.Descricao}</option>
                    )} 
                </Form.Select>
            </div>
        }

        {tipoLabel == "float" && 
            <div>
                <FloatingLabel label={label}>
                <Form.Select id="imovelUF" value={value}>
                    <option value="0">Selecione...</option>
                    {retornoAPI.map(retornoAPI => 
                        <option value={retornoAPI.Id}>{retornoAPI.Descricao}</option>
                    )} 
                </Form.Select>
                </FloatingLabel>
            </div>
        }
        </>
  
  )};


  export default SelectParametrado;
