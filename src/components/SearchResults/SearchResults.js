import './SearchResults.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

export default function SearchResults(props){
    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            {props.results.map(button => {
                return <PlaylistTrack track={button} key={button.id} id={button.id} name={button.name} onAdd={props.onAdd} isRemoval={false}/>;
            }) }
            

        </div>
    )
}