import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Poster = ({postToWall}) => (
    <div>
        <textarea />
        <RaisedButton label="發送" primary={true} onClick={postToWall}/>
    </div>
)

export default Poster;