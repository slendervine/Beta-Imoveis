import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

import Navbar from './Components/MinhaNavBar.js';
import FormInfo from './Components/Form.js'



function App() {

  return (
    <div className="App">
    
      <Navbar />
      <br />
      <Card>
      <Container>

        <FormInfo />

      </Container>
      </Card>
    </div>
  );
}

export default App;
