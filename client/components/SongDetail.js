import React from 'react';
import query from "../queries/fetchSongById";
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
const SongDetail = (props) => {

    const { song } = props.data;
    if (!song) {
        return <div className="">Loading...</div>;
    }

    return (
        <div>
            <Link to="/" className=''>
                Back
            </Link>
            <h3>{song.title}</h3>
            <LyricList lyrics={song.lyrics}/>
            <LyricCreate songId={props.params.id} />
        </div>
    );
};

export default graphql(query, {
    options: (props) => { return { variables: { id: props.params.id } }; }
})(SongDetail);