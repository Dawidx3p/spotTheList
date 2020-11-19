import logo from '../../img/logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from '../SearchResults/SearchResults';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{title: 'first', id: 1}, {title: 'second', id: 2}, {title: 'third', id: 3}, {title: 'and', id: 4}]
    }
  }
  render(){
    return (
    <div className="App">
      <img src={logo} alt="logo" id="logo"/>
      <Container>
        <Row>
          <Col xs={12} md={4}>
          <SearchResults results={this.state.searchResults}/>
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
}

export default App;
