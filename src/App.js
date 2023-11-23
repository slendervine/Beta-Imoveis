import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

import NavbarComp from './Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './Telas/Home';

function App() {

  return (
      <>
      <NavbarComp />
      <Container>
        <Router>
          <Routes>
            <Route path='/' element = {<HomeComp />} />
          </Routes>
        </Router>
      </Container>
      </>
  );
}

export default App;
