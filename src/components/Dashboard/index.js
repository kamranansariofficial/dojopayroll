import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dojo from "../assets/images/dojo(1).png";
import Box from '@material-ui/core/Box';
import Table from '../Dashboard/Table';
import Card from './Paystub';
import {
    FaSearch
  } from "react-icons/fa";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  borderRight:{
    borderRight:'1px solid rgba(0, 0, 0, 0.1)',
    height: '63px',
  },
  logoimg:{
    paddingTop: '15px',
    marginRight: '10px',
  },
  logoapp:{
    paddingTop: '20px',
    marginLeft: '10px',
    position:'absolute',
  },
  meunicon:{
      color:'#007bff',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor:'#2b2f3a',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor:'#2b2f3a',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:'#2b2f3a',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor:'#ECECEF',
  },
  FaSearch:{
      color:'#adb5bd',
      fontSize:'20px',
      marginLeft:'15px',
  },
  whitetext:{
      color:'#8991a9',
  },
  iconcolor:{
      color:'#8991a9',
  },
  background:{
      backgroundColor:'white',
  },
  supporttext:{
      color:'#212529',
      fontSize:'14px',
      fontWeight:'600',
  },
  
}));

export default function MiniDrawer() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
   
        <Box p={5} my={5} >
        <Table />
        </Box>
        <Box p={5} className={classes.background}>
          <Typography className={classes.supporttext}>
              © 2020 Support: (513) 580-4717.
          </Typography>
      </Box>
      
    </div>
  );
}
