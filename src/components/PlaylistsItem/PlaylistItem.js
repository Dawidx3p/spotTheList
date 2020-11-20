import React from 'react';

class PlaylistsItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {name: this.props.name, id: this.props.id};
		this.onSelect = this.onSelect.bind(this);
    }
    onSelect() {
		this.props.onSelect(this.state.id, this.state.name);
    }
    render() {
		return(
            <button key={this.props.id} id={this.props.id} onClick={this.onSelect} className="ButtonS">{this.props.name}</button>
		)
    }
}
export default PlaylistsItem