import React from 'react';
import { graphql } from 'react-apollo';
import likeLyrics from '../queries/likeLyrics';
const LyricList = (props) => {
  const { lyrics, mutate } = props;
  const onLike = ({id, likes}) => {
    console.log(id);
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
      }
    }
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(lyric => <li className="collection-item" key={lyric.id} >{lyric.content} <div className="">
        <i className="material-icons" onClick={() => onLike(lyric)} >thumb_up</i>{lyric.likes}
      </div>  </li>)}
    </ul>
  );
};

export default graphql(likeLyrics)(LyricList);
