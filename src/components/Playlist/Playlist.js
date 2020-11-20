import './Playlist.css';
import React from 'react';

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
                return <button key={button.id} id={button.id} className="ButtonS">{button.name}</button>;
            }) }
		</div>
    )
    }
}

export default Playlist;