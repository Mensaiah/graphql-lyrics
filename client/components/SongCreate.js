
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    handleOnSubmit(e) {
        const { mutate } = this.props;
        e.preventDefault();
        mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]

        }).then(() => {
            this.setState({ title: "" });
            hashHistory.push('/');


        });
    }


    render() {

        return (
            <div>
                <Link to="/" className=''>
                    Back
                </Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <label htmlFor="">Song Title:</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            e.preventDefault();
                            this.setState({ title: e.target.value });
                        }}
                        name="title"
                        value={this.state.title}
                    />

                </form>
            </div>
        );
    }
}

const mutation = gql`
 mutation AddSong($title: String){
    addSong(title: $title){
        id
        title
    }

}

`;
export default graphql(mutation)(SongCreate);