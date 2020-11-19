import './SearchResults.css';

export default function SearchResults(props){
    console.log(props);
    return(
        <div className="SearchResults">
            <h2>Search Results</h2>
            {props.results.map(button => {
                return <button key={button.id} id={button.id} className="ButtonS">{button.title}</button>;
            }) }
            

        </div>
    )
}