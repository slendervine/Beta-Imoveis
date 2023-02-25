import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Nav, Row, Col, Tab } from 'react-bootstrap';
import TabComodosInfo from './Tab/TabComodosImovel.js';
import TabDimensoesInfo from '../CaracteristicasImovel/Tab/TabDimensoesImovel.js';
import TabAdicionaisImovelInfo from '../CaracteristicasImovel/Tab/TabAdicionaisImovel.js';
import TabSobreImovelInfo from '../CaracteristicasImovel/Tab/TabSobreImovel.js';







function CaracteristicaImovel({ formData, setFormData }) {


  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="sobreImovel">
      <Row>
        
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="sobreImovel">Sobre o Imóvel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="comodoImovel">Cômodos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dimensaoImovel">Dimensões</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="adicionaisImovel">Adicionais</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="sobreImovel">
              <TabSobreImovelInfo formData={formData} setFormData={setFormData} />
            </Tab.Pane>

            <Tab.Pane eventKey="comodoImovel">
              <TabComodosInfo formData={formData} setFormData={setFormData}/>
            </Tab.Pane>

            <Tab.Pane eventKey="dimensaoImovel">
              <TabDimensoesInfo formData={formData} setFormData={setFormData}/>
            </Tab.Pane>

            <Tab.Pane eventKey="adicionaisImovel">
              <TabAdicionaisImovelInfo formData={formData} setFormData={setFormData}/>
            </Tab.Pane>
          </Tab.Content>
        </Col>

      </Row>
    </Tab.Container>
      </>
  );
}



export default CaracteristicaImovel;
