import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BookIcon from '@material-ui/icons/Book';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,

  },
  fullList: {
    width: 'auto',

  },
  meunicon:{
    color:'#007bff',
  },
  menuButton1: {
    marginRight: 36,
      [theme.breakpoints.between('md', 'xl')]: {
        display:'none',
      },
  },
  whitetext:{
    color:'#8991a9',


},

}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.whitetext}>
          <ListItem  component="a" button href="/dashboard">
            <ListItemIcon><DashboardIcon className={classes.whitetext} /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountCircleIcon className={classes.whitetext} /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><QueryBuilderIcon className={classes.whitetext} /></ListItemIcon>
            <ListItemText primary="Time Portal" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><PersonAddIcon className={classes.whitetext} /></ListItemIcon>
            <ListItemText primary="Add Employees" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BookIcon className={classes.whitetext} /></ListItemIcon>
            <ListItemText primary="Bookkeeping App" />
          </ListItem>
         <Box ml='55px'>
         <ListItem  component="a" button href="/">
            <ListItemText className={classes.whitetext} primary="Log Out" />
          </ListItem>
         </Box>
      </List>

    </div>
  );

  return (
    <>
      <IconButton
          className={classes.menuButton1}
            color="inherit"
            onClick={toggleDrawer('left', true)}
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon className={classes.meunicon} />
          </IconButton>

        <React.Fragment key={'left'}>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>

    </>
  );
}
