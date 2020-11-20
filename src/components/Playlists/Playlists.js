import './Playlists.css';
import PlaylistsItem from '../PlaylistsItem/PlaylistItem'

export default function Playlists (props){
		return(
			<div className="Playlists">
                <h2>Playlists</h2>
              {props.list.map(button => {
                return <PlaylistsItem onSelect={props.select} name={button.name} key={button.id} id={button.id} />;
            }) }
			</div>
		)
}