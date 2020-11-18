import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" id="logo"/>
      <Container>
        <Row>
          <Col xs={12} md={4}>
          poziomka1
          </Col>
          <Col xs={12} md={4}>
          poziomka1
          </Col>
          <Col xs={12} md={4}>
          poziomka1
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
