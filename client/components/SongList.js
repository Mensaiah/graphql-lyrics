import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link ,hashHistory} from 'react-router';
import query from '../queries/fetchSongs';
const SongList = ({ data, mutate }) => {
    const { songs, loading } = data;

    if (loading) return <div>Loading...</div>;
    const onSongDelete = (id) => {
        mutate({ variables: { id } })
            .then(() => data.refetch());
    };

    return (<div>
        <ul className="collection">
            {songs.map(song => <li className="collection-item" key={song.id} onClick={() => hashHistory.push(`songs/${song.id}`)}>{song.title} <i className="material-icons" onClick={() => onSongDelete(song.id)}>delete</i></li>)};
        </ul>
        <Link to="/songs/new" className='btn-floating btn-large red light'>
            <i className="material-icons">add</i>
        </Link>
    </div>);

};

const mutation = gql`
mutation DeleteSonge($id: ID) {
    deleteSong(id: $id) {
        id
    }
}
`;

export default graphql(mutation)(graphql(query)(SongList));
