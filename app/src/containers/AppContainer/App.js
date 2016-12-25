import React, { Component } from 'react';
import * as setting from '../../setting';

import Login from './components/Login';
import Poster from './components/Poster';
import GroupList from './components/GroupList';

const styles = {
    poster: {
        width: '50%',
        float: 'left'
    },
    groupList: {
        width: '50%',
        float: 'left'
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            appId: setting.appId,
            groups: [],
            message: ''
        }
    }

    render() {
        const { isLogin, appId, groups, message } = this.state;

        return (
            <div>
                {!isLogin
                    ? <Login appId={appId} fbLogin={this.fbLogin} />
                    : <div>
                        <div style={styles.poster}>
                            <Poster postToWall={this.postToWall} message={message} setMessage={this.setMessage} />
                        </div>
                        <div style={styles.groupList}>
                            <GroupList groups={groups} handleChecked={this.handleChecked} />
                        </div>
                    </div>}
            </div>
        )
    }

    fbLogin = (response) => {
        const that = this;
        FB.api('/me/groups', 'get', function(response) {
            const groups = response.data.reverse().map(obj => {
                return {
                    name: obj.name,
                    groupId: obj.id,
                    checked: false,
                    postId: ''
                }
            })
            that.setState({
                isLogin: true,
                groups
            })
        }); 
    }

    postToWall = () => {
        const { groups, message } = this.state;

        groups.map((obj, idx) => {
            if (!obj.checked) return;

            const that = this;
            FB.api(`/${obj.groupId}/feed`, 'post', { message }, function(response) {
                if (!response || response.error) {
                    alert('Error occured');
                } else {
                    const { groups } = that.state;
                    that.setState({
                        groups: [
                            ...groups.slice(0, idx),
                            {
                                ...groups[idx], 
                                postId: response.id
                            },
                            ...groups.slice(idx + 1)
                        ]
                    })
                }
            });     
        })    
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

    setMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
}

export default App;