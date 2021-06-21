import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Hidden,
} from "@material-ui/core";
import Logo from "../assets/images/logowhite.png";
import MenuIcon from "@material-ui/icons/Menu";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  bgcolor1: {
    paddingTop: "25px",
    transition: "all .3s",
    boxShadow: "none",
  },
  bgcolor: {
    backgroundColor: "#5f4dee",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    zIndex: "999",
    transition: "all .3s",
    width: "100%",
    boxShadow: "none",
    height: "70px",
    "&.MuiToolbar-regular": {
      minHeight: "55px!important",
    },
  },
  herobg: {
    backgroundColor: "#5f4dee",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  btn: {
    borderRadius: "2rem",
    marginRight: "15px",
    fontWeight: 700,
    paddingLeft: "25px",
    paddingRight: "25px",
    border: "2px solid",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5f4dee",
      border: "2px solid #5f4dee",
    },
  },
  btnCollapse: {
    borderRadius: "2rem",
    fontWeight: 700,
    borderColor: "#fff",
    color: "#fff",
    marginLeft: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [offset, setOffset] = React.useState(0);
  const [state, setstate] = React.useState(false);
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box>
        <AppBar
          className={offset > 30 ? classes.bgcolor : classes.bgcolor1}
          position={"static"}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={Logo} alt="logo" height="auto" width="70px" />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Hidden smUp>
              <IconButton onClick={() => setstate(!state)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <Button
                size="small"
                className={classes.btn}
                variant="outlined"
                color="inherit"
              >
                SIGN UP
              </Button>
              <Button
                size="small"
                className={classes.btn}
                variant="outlined"
                color="inherit"
              >
                LOG IN
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Collapse in={state}>
          <Box bgcolor="#5F4DEE" py={1}>
            <Button className={classes.btnCollapse} variant="outlined">
              SIGN UP
            </Button>
            <Button className={classes.btnCollapse} variant="outlined">
              SIGN IN
            </Button>
          </Box>
        </Collapse>
      </Box>
    </div>
  );
}
