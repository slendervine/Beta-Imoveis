import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


function MinhaNavBar() {
    return ( 
    <Navbar bg="light" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="/">Beta ERP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Consulta" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/consulta_imoveis">
                        Imoveis
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/cadastra_imovel">
                        Novo Imóvel
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Novo Condomínio
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        Novo Usuário
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
  </Navbar>
  
  )};


  export default MinhaNavBar;
