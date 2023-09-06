import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './slider.css'

function Drawer1() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1 onClick={() => navigate("/inbox")}>inbox</h1>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => navigate("/inbox")}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Text" />
        </ListItem>
      </List>
    </div>
  );
    
  return (
    <div>
      <Box className='bg'>
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />} sx={{
          position: 'fixed',
          top: '50%',
          right: 16,
          display: 'flex',
          alignItems: 'flex-end',
          
        }}>
          {['left', 'top', 'right', 'bottom'].map((anchor) => (
            <SpeedDialAction
              key={anchor}
              icon={anchor}
              onClick={toggleDrawer(anchor, true)}
              className='bg'
            >
              {anchor}
              <Drawer className='bg' anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
              </Drawer>
            </SpeedDialAction>
          ))}
        </SpeedDial>
      </Box>

      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <Box key={anchor} sx={{ height:0, transform: 'translateZ(0px)', flexGrow: 1, }}>
          <Button onClick={toggleDrawer(anchor, true)}></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Box>
      ))}

    </div>

  );

}

export default Drawer1;




