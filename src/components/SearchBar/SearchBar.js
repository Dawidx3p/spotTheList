import './SearchBar.css'
import React from 'react';

class SearchBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = { term: ''}
		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}
	search() {
		this.props.onSearch(this.state.term);
		document.getElementById('input1').value = '';
	}
	handleTermChange(event){
		this.setState({term: event.target.value})
	}
	render() {
		return(
			<div className="SearchBar">
			  <input id="input1" placeholder="Enter A Song, Album, or Artist" 
			  onChange={this.handleTermChange}/>
			  <button onClick={this.search}			  
			  className="SearchButton">SEARCH</button>
			</div>
		)
	}
}
export default SearchBar;