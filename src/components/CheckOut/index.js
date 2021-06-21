import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Visa from "../assets/images/visa.jpeg";
import Cvc from "../assets/images/cvc.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  cardheading: {
    fontSize: "22px",
    fontWeight: 700,
    paddingBottom: "15px",
  },
  inputtext: {
    fontSize: "14px",
    color: "#555555",
    paddingBottom: "3px",
    fontWeight: 550,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  btntext: {
    paddingTop: "10px",
    color: "gray",
    textAlign: "center",
    fontSize: "14px",
  },
  visaimg: {
    marginLeft: "auto",
  },
  subcribebtn: {
    backgroundColor: "#169888",
    "&:hover": {
      backgroundColor: "#169888",
      color: "#fff",
    },
  },
  margin: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  fvrbtn: {
    backgroundColor: "#fdde91",
    color: "#b95408",
    marginBottom: "15px",
    "&:hover": {
      backgroundColor: "#fdde91",
      color: "#b95408",
    },
  },
  background: {
    backgroundColor: "#169888",
    paddingTop: "20px",
  },
  iconcolor: {
    color: "#fff",
  },
  arrowcolor: {
    color: "#62beb3",
  },
  powertext: {
    paddingBottom: "35px",
    color: "#62beb3",
    fontSize: "14px",
    paddingLeft: "10px",
  },
  textbold: {
    fontWeight: 700,
  },
  border: {
    borderLeft: "1px solid #62beb3",
    marginLeft: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  Subscribetext: {
    fontSize: "14px",
    color: "#62beb3",
  },
  timetext: {
    fontWeight: 700,
    fontSize: "25px",
    color: "#fff",
  },
  monthtext: {
    fontSize: "14px",
    color: "#62beb3",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Container fixed>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className={classes.background}>
                <Box pt={10} />
                <Container maxWidth="md">
                  <ArrowBackIcon className={classes.arrowcolor} />
                  <span className={classes.margin}>
                    <FavoriteIcon className={classes.iconcolor} />
                  </span>
                  <span>
                    <Button
                      size="small"
                      className={classes.fvrbtn}
                      color="primary"
                      variant="contained"
                    >
                      TEST MODE
                    </Button>
                  </span>
                  <Box pl={5} pt={3}>
                    <Typography className={classes.Subscribetext}>
                      Subscribe to starter
                    </Typography>
                    <Typography className={classes.timetext}>
                      $12:00<span className={classes.monthtext}>month</span>
                    </Typography>
                  </Box>
                  <Box pt={40}>
                    <Typography className={classes.powertext}>
                      Powered by <span className={classes.textbold}>Strip</span>
                      <span className={classes.border}>Terms</span>
                      <span>Privacy</span>
                    </Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pt={10} />
              <Container maxWidth="md">
                <Typography className={classes.cardheading}>
                  Pay with card
                </Typography>
                <Typography className={classes.inputtext}>Email</Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                />
                <Box pt={2} />
                <Typography className={classes.inputtext}>
                  Card information
                </Typography>
                <TextField
                  size="small"
                  placeholder="1234 1234 1234"
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <img
                          className={classes.visaimg}
                          src={Visa}
                          alt="visa"
                          height="auto"
                          width="35%"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box pt={2} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      placeholder="MM / YY"
                      id="outlined-basic"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      placeholder="CVC"
                      id="outlined-basic"
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <img
                              className={classes.visaimg}
                              src={Cvc}
                              alt="cvc"
                              height="auto"
                              width="40%"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <Box pt={2} />
                <Typography className={classes.inputtext}>
                  Country or region
                </Typography>
                <FormControl
                  size="small"
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    United States
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="United States"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Box pt={2} />
                <TextField
                  size="small"
                  placeholder="ZIP"
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                />
                <Box pt={2} />
                <Button
                  className={classes.subcribebtn}
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Subscribe
                </Button>
                <Typography className={classes.btntext}>
                  By confirming your subscription, you allow togethere to charge
                  your card for this payment and future payments in accordance
                  with their terms.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
