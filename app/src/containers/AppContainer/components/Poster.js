import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    textarea: {
        width: '500px',
        height: '200px'
    },
    submit: {
        marginLeft: '20px'
    }
}

const Poster = ({postToWall, message, setMessage}) => (
    <div>
        <textarea style={styles.textarea} value={message} onChange={setMessage} />
        <RaisedButton style={styles.submit} label="發送" primary={true} onClick={postToWall}/>
    </div>
)

export default Poster;