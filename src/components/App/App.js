import logo from '../../img/logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import Playlists from '../Playlists/Playlists';
import React from 'react';
import Spotify from '../../util/Spotify.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: 'MyPlaylist',
      playlistTracks: [],
      playlistList: [],
      playlistId: null
      };
      this.search = this.search.bind(this);
      this.selectPlaylistId = this.selectPlaylistId.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      
  }
  search(term) {
		Spotify.search(term).then(results => {
		this.setState({searchResults: results}) 
		})
  }
  removeTrack(track) {
		let tracks = this.state.playlistTracks;
		tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
		this.setState({ playlistTracks: tracks })
  }
  addTrack(track) {
		const tracks = this.state.playlistTracks;
		if (tracks.find(savedTrack => savedTrack.id === track.id)) {
		  return;
		}else {
		tracks.push(track);
		this.setState({ playlistTracks: tracks });
		}
	}
  selectPlaylistId(id, name) {
		Spotify.getPlaylistId(id)
		.then(tracks => {
			this.setState({
				playlistName: name,
				playlistTracks: tracks,
				playlistId: id
			})
		})
	}
  updatePlaylistName(name){
    this.setState({ playlistName : name })
  }
  savePlaylist() {
		try{
      const trackUris = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, trackUris, this.state.playlistId).then(() => {
        this.setState({
          playlistName: 'New Playlist',
          playlistTracks: [],
          playlistId: null
        })
      })
      } catch(err){

      }
    }
  componentDidMount() {
		Spotify.getUserPlaylists().then( userPlaylists =>
		this.setState({playlistList: userPlaylists}))
	}
  render(){
    return (
    <div className="App">
      <img src={logo} alt="logo" id="logo"/>
      <SearchBar onSearch={this.search}/>
      <Container>
        <Row>
          <Col xs={12} md={4}>
          <SearchResults results={this.state.searchResults} onAdd={this.addTrack}/>
          </Col>
          <Col xs={12} md={4}>
          <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} 
          onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} />
          </Col>
          <Col xs={12} md={4}>
          <Playlists list={this.state.playlistList} select={this.selectPlaylistId}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default App;
