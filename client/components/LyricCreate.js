import React, { Component } from 'react'
import addLyricToSong from '../queries/addLyricToSong'
import { graphql } from 'react-apollo'


class LyricCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { content: ""}
        }
        handleOnSubmit (e) { 
            const {mutate,songId} = this.props
            e.preventDefault()
            mutate({
                variables: {content: this.state.content, songId},
      
            }).then(() => {
                this.setState({content: ""});   
            })
          }  
  render() {
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <label >Add New Lyrics: </label>
            <input type="text"
            value={this.state.content}
              onChange={(e) => {
                e.preventDefault();
                
                this.setState({content: e.target.value});
            }}
             />
       
      </form>
    )
  }
}

export default graphql(addLyricToSong)(LyricCreate)