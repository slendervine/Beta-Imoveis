import React, { useState } from 'react';
import axios from 'axios';


function PesquisaImoveis(){

    const baseURL = "https://localhost:1900/sandbox"

    React.useEffect(() => {
        axios.get(baseURL).then((recordset) => {
          setPost(recordset.recordset);

          console.log(post)
        });
    }, []);
    
    
    return (
        <div className=" form">
            <div className="progressbar"></div>
            <div className="form-container">
                alou
            </div>
        </div>
    )};

export default PesquisaImoveis;
