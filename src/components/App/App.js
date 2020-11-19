import logo from '../../img/logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import Spotify from '../../util/Spotify.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: 'MyPlaylist',
      playlistTracks: [],
      playlistId: null
      };
      this.search = this.search.bind(this);
  }
  search(term) {
		Spotify.search(term).then(results => {
		this.setState({searchResults: results}) 
		})
	}
  render(){
    return (
    <div className="App">
      <img src={logo} alt="logo" id="logo"/>
      <SearchBar onSearch={this.search}/>
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
