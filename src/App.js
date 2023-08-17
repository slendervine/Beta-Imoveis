import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

import NavbarComp from './Components/MinhaNavBar.js';
import FormComp from './Components/Form.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './Telas/Home';
import ConsultaImoveisComp from './Telas/ConsultaImoveis';
import EditarImovelComp from './Telas/EditarImovel';

function App() {

  return (
      <>
      <NavbarComp />
      <Container>
        <Router>
          <Routes>
            <Route path='/'                   element = {<HomeComp />} />
            <Route path='/cadastra_imovel'    element = {<FormComp />} />
            <Route path='/consulta_imoveis'   element = {<ConsultaImoveisComp />} />
            <Route path='/editar_imovel/:id'  element = {<EditarImovelComp />} />
          </Routes>
        </Router>
      </Container>
      </>
  );
}

export default App;
