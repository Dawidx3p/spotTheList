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
			return <button key={this.props.id} id={this.props.id} className="ButtonS" onClick={this.removeTrack}>{this.props.name}</button>
		}else {
			return <button key={this.props.id} id={this.props.id} className="ButtonS" onClick={this.addTrack}>{this.props.name}</button>
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

