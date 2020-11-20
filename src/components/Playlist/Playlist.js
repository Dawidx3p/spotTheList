import './Playlist.css';
import React from 'react';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

class Playlist extends React.Component{
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}
    render() {
    return(
        <div className="Playlist">
              <input id="PlaylistInput" 
              value={this.props.name}
              onChange={this.handleNameChange}/>
              {this.props.tracks.map(button => {
                return <PlaylistTrack track={button} key={button.id} id={button.id} name={button.name} onRemove={this.props.onRemove} onAdd={this.props.onAdd} isRemoval={true} />;
            }) }
		</div>
    )
    }
}

export default Playlist;