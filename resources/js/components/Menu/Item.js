import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function Item() {
  const menus = [
    {"menu": "Travel一覧", "url": "/travels"},
    {"menu": "Food一覧", "url": "/foods"},
    {"menu": "Scenery一覧", "url": "/sceneries"},
    {"menu": "Dating一覧", "url": "/datings"},
  ];
  
  return (
    <List>
      { menus.map((menu) => (
        <Link to={ menu.url } style={{ color: 'black' }}>
          <ListItem button key={ menu.menu }>
            <ListItemText primary={ menu.menu } sx={{ pl: 10 }}/>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
