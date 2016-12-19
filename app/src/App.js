import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import RaisedButton from 'material-ui/RaisedButton';

import { appId } from './setting';

class App extends Component {

    postToWall = () => {

        const message = 
        `
            活動發佈訊息
            有換行嗎
        `;

        FB.api('/me/feed', 'post', { message }, function(response) {
            console.log(response);
            if (!response || response.error) {
                alert('Error occured');
            } else {
                alert('Post ID: ' + response.id);
            }
        });
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId={appId}
                    fields="name,email,picture"
                    callback={() => {}}
                    icon="fa-facebook"
                    scope="public_profile, user_managed_groups, manage_pages, publish_pages, publish_actions"
                />
                <RaisedButton label="發送" primary={true} onClick={this.postToWall}/>
            </div>
        )
    }
}

export default App;