import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  bgcolor: {
    backgroundColor: "#5f4dee",
  },
  signheading: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: 700,
  },
  signtext: {
    color: "#fff",
    fontSize: "16px",
    paddingBottom: "35px",
  },
  loginlink: {
    color: "#fff",
  },
  borderBox: {
    backgroundColor: "#f3f7fd",
    borderRadius: "0.5rem",
    maxWidth: "26rem",
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputText: {
    fontSize: "16px",
    color: "#555555",
    paddingBottom: "10px",
  },
  inputTextField: {
    backgroundColor: "#fff",
  },
  FormControlLabel: {
    marginRight: "0px",
  },
  checkboxtext: {
    fontSize: "12px",
    color: "#555555",
  },
  checklink: {
    color: "#555555",
  },
  sginbtn: {
    marginTop: "20px",
    color: "#fff",
    backgroundColor: "#5f4dee",
    borderRadius: "2rem",
    padding: "10px 35px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#f3f7fd",
      color: "#5f4dee",
      border: "2px solid #5f4dee",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Box pt={20} textAlign="center" className={classes.bgcolor}>
        <Container fixed>
          <Grid justify="center" container>
            <Grid item lg={8}>
              <Typography className={classes.signheading}>Sign Up</Typography>
              <Typography className={classes.signtext}>
                Already signed up?{" "}
                <a className={classes.loginlink} href="#">
                  {" "}
                  Log In{" "}
                </a>{" "}
                here.
              </Typography>
              <Box py={5} className={classes.borderBox}>
                <Typography className={classes.inputText}>Username*</Typography>
                <Box px={4} pb={2}>
                  <TextField
                    className={classes.inputTextField}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>
                <Typography className={classes.inputText}>
                  Email address
                </Typography>
                <Box px={4} pb={2}>
                  <TextField
                    className={classes.inputTextField}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>
                <Typography className={classes.inputText}>Password*</Typography>
                <Box px={4} pb={1}>
                  <TextField
                    className={classes.inputTextField}
                    id="outlined-basic"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>
                <Box px={4}>
                  <Typography className={classes.checkboxtext}>
                    <FormControlLabel
                      className={classes.FormControlLabel}
                      value="end"
                      control={<Checkbox color="primary" />}
                      labelPlacement="end"
                      size="small"
                    />
                    I agree with Tivo's{" "}
                    <a className={classes.checklink} href="#">
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                    and{" "}
                    <a className={classes.checklink} href="#">
                      {" "}
                      Terms Conditions{" "}
                    </a>
                  </Typography>
                </Box>
                <Box px={4}>
                  <Link to="/dashboard">
                    <Button
                      className={classes.sginbtn}
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      SIGN UP
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
