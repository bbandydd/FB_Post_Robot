import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const GroupList = ({groups, handleChecked}) => (
    <List>
        {groups.map((obj, idx) => (
            <ListItem
                key={`group_${idx}`}
                leftCheckbox={<Checkbox checked={obj.checked} onCheck={() => handleChecked(idx)} />}
                primaryText={
                    <span>
                        <a target="_blank" href={`https://www.facebook.com/groups/${obj.groupId}`}>{obj.name}</a>
                        <span style={{marginLeft: '30px'}}>{obj.postId}</span>
                    </span>
                }
            />
        ))}    
    </List>
)

export default GroupList;