import React, { Component } from 'react';
import * as setting from '../setting';

import Login from './Login';
import Poster from './Poster';
import GroupList from './GroupList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appId: setting.appId,
            groups: setting.groups
        }
    }

    postToWall = () => {
        this.state.groups.filter(x=>x.checked).map(obj => console.log(obj))
        // const message = 
        // `
        //     活動發佈訊息
        //     有換行嗎
        // `;

        // FB.api('/me/feed', 'post', { message }, function(response) {
        //     console.log(response);
        //     if (!response || response.error) {
        //         alert('Error occured');
        //     } else {
        //         alert('Post ID: ' + response.id);
        //     }
        // });
    }

    handleChecked = (index) => {
        const { groups } = this.state;

        this.setState({
            groups: [
                ...groups.slice(0, index),
                {
                    ...groups[index], 
                    checked: !groups[index].checked
                },
                ...groups.slice(index + 1)
            ]
        })
    }

    render() {
        const { appId, groups } = this.state;

        return (
            <div>
                <Login appId={appId} />
                <Poster postToWall={this.postToWall} />
                <GroupList groups={groups} handleChecked={this.handleChecked} />
            </div>
        )
    }
}

export default App;