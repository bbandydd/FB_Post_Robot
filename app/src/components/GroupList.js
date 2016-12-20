import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const GroupList = ({groups, handleChecked}) => (
    <List>
        {groups.map((obj, idx) => (
            <ListItem
                key={`group_${idx}`}
                leftCheckbox={<Checkbox checked={obj.checked} onCheck={() => handleChecked(idx)} />}
                primaryText={obj.name}
            />
        ))}    
    </List>
)

export default GroupList;