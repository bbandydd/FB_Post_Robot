import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    textarea: {
        width: '500px',
        height: '200px'
    }
}

const defaultText = 
`
    POST MESSAGE 
    TO GROUPS
`

const Poster = ({postToWall}) => (
    <div>
        <textarea style={styles.textarea} value={defaultText} />
        <RaisedButton label="發送" primary={true} onClick={postToWall}/>
    </div>
)

export default Poster;