import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dojo from "../assets/images/dojo(1).png";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import PinkLogo from "../assets/images/pink-logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import BookIcon from "@material-ui/icons/Book";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { FaSearch } from "react-icons/fa";
import DrawerMobile from "../Navbar/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  borderRight: {
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    height: "63px",
  },
  logoimg: {
    paddingTop: "15px",
    marginRight: "10px",
  },
  logoapp: {
    paddingTop: "20px",
    marginLeft: "10px",
    position: "absolute",
  },
  meunicon: {
    color: "#007bff",
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#2b2f3a",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#2b2f3a",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#2b2f3a",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ECECEF",
  },
  FaSearch: {
    color: "#adb5bd",
    fontSize: "20px",
    marginLeft: "15px",
  },
  whitetext: {
    color: "#8991a9",
    "&:hover": {
      color: "#fff",
    },
  },
  iconcolor: {
    color: "#8991a9",
  },
  background: {
    backgroundColor: "white",
  },
  supporttext: {
    color: "#212529",
    fontSize: "14px",
    fontWeight: "600",
  },
}));

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        onMouseLeave={handleDrawerClose}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,

        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onMouseOver={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon className={classes.meunicon} />
          </IconButton>
          <DrawerMobile />
          <Box className={classes.borderRight}>
            <img
              className={classes.logoimg}
              src={Dojo}
              alt="Dojo"
              height="auto"
              width="80"
            />
          </Box>
          <IconButton
            className={classes.FaSearch}
            aria-label="delete"
            color="primary"
          >
            <FaSearch color="secondary" />
          </IconButton>
          <Box ml="auto">
            <IconButton>
              <Avatar src={PinkLogo} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        onMouseOver={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <img
          className={classes.logoapp}
          src={Dojo}
          alt="Dojo"
          height="auto"
          width="80"
        />
        <div className={classes.toolbar}>
          <IconButton >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className={classes.iconcolor} />
            ) : (
              <ChevronLeftIcon className={classes.iconcolor} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.whitetext}>
          <ListItem className={classes.whitetext} component="a" button href="/dashboard">
              <ListItemIcon>
                <DashboardIcon className={classes.whitetext} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem className={classes.whitetext} button>
            <ListItemIcon>
              <AccountCircleIcon className={classes.whitetext} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem className={classes.whitetext} button>
            <ListItemIcon>
              <QueryBuilderIcon className={classes.whitetext} />
            </ListItemIcon>
            <ListItemText primary="Time Portal" />
          </ListItem>
          <ListItem className={classes.whitetext} button>
            <ListItemIcon>
              <PersonAddIcon className={classes.whitetext} />
            </ListItemIcon>
            <ListItemText primary="Add Employees" />
          </ListItem>
          <ListItem className={classes.whitetext} button>
            <ListItemIcon>
              <BookIcon className={classes.whitetext} />
            </ListItemIcon>
            <ListItemText primary="Bookkeeping App" />
          </ListItem>
          <Box ml="55px">
            <ListItem className={classes.whitetext}  component="a" button href="/">
              <ListItemText className={classes.whitetext} primary="Log Out" />
            </ListItem>
          </Box>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
