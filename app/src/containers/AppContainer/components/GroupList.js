import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const GroupList = ({groups, handleChecked}) => (
    <List>
        {groups.map((obj, idx) => (
            <ListItem
                key={`group_${idx}`}
                leftCheckbox={<Checkbox checked={obj.checked} onCheck={() => handleChecked(idx)} />}
                primaryText={<a target="_blank" href={`https://www.facebook.com/groups/${obj.groupId}`}>{obj.name}</a>}
            />
        ))}    
    </List>
)

export default GroupList;