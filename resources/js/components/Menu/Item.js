import { Link } from 'react-router-dom';

import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import Divider from '@mui/material/Divider';
import EscalatorWarningTwoToneIcon from '@mui/icons-material/EscalatorWarningTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';
import Typography from '@mui/material/Typography';


export default function Item() {
  
  const calendar = 
    {"icon":<CalendarTodayTwoToneIcon />, "name": "Calendar", "url": "/calendar"};
    
  const menus = [
    {"icon":<AirplanemodeActiveTwoToneIcon />, "name": "Travel 一覧", "url": "/travels"},
    {"icon":<RestaurantTwoToneIcon />, "name": "Food 一覧", "url": "/foods"},
    {"icon":<PhotoCameraTwoToneIcon />, "name": "Scenery 一覧", "url": "/sceneries"},
    {"icon":<EscalatorWarningTwoToneIcon />, "name": "Dating 一覧", "url": "/datings"},
  ];
  
  return (
    <List>
      <Link to={ calendar.url } key={ calendar.name }>
        <ListItem>
          <ListItemIcon>
            { calendar.icon }
          </ListItemIcon>
          <ListItemText primary={<Typography style={{ color: 'black' }}>{ calendar.name }</Typography>} />
        </ListItem>
      </Link>
      <Divider />
      { menus.map((menu) => (
        <Link to={ menu.url } key={ menu.name }>
          <ListItem>
            <ListItemIcon>
              { menu.icon }
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ color: 'black' }}>{ menu.name }</Typography>} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
