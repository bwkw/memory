import { Link } from 'react-router-dom';

import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
import EscalatorWarningTwoToneIcon from '@mui/icons-material/EscalatorWarningTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import Typography from '@mui/material/Typography';


export default function Item() {
  
  const menus = [
    {"icon":<AirplanemodeActiveTwoToneIcon />, "menu": "Travel 一覧", "url": "/travels"},
    {"icon":<RestaurantTwoToneIcon />, "menu": "Food 一覧", "url": "/foods"},
    {"icon":<PhotoCameraTwoToneIcon />, "menu": "Scenery 一覧", "url": "/sceneries"},
    {"icon":<EscalatorWarningTwoToneIcon />, "menu": "Dating 一覧", "url": "/datings"},
  ];
  
  return (
    <List>
      { menus.map((menu) => (
        <Link to={ menu.url } key={ menu.menu }>
          <ListItem>
            <ListItemIcon>
              { menu.icon }
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ color: 'black' }}>{ menu.menu }</Typography>} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
