import React from 'react';
import './PlaylistTrack.css';

class PlaylistTrack extends React.Component{
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}
	renderAction() {
		if(this.props.isRemoval){
			return <div key={this.props.id} id={this.props.id} 
			className="ButtonS"><button onClick={this.removeTrack} className="deleteB">x</button>{this.props.name}</div>
		}else {
			return <div key={this.props.id} id={this.props.id} 
			className="ButtonS"><button onClick={this.addTrack} className="deleteB">+</button>{this.props.name}</div>
		}
	}
	removeTrack() {
		this.props.onRemove(this.props.track);
	}
	addTrack() {
		this.props.onAdd(this.props.track)
	}
	render() {
		return(
			<div className="PlaylistTrack">
			  {this.renderAction()}
			</div>
		)
	}
}
export default PlaylistTrack;

