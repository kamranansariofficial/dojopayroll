import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, Container, IconButton } from "@material-ui/core";
import Print from "../../../assets/images/print.png";
import PinkLogo from "../../../assets/images/pink-logo.png";
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#428bca",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    textAlign: "center",
  },
  imglogopink: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  background1: {
    backgroundColor: "#428bca",
  },
  paytext: {
    color: "#fff",
    fontWeight: 600,
    paddingRight: "20px",
  },
  float: {
    float: "right",
  },
  logobackground: {
    backgroundColor: "#f5f9fc",
  },
  fontWeight: {
    fontWeight: 700,
  },
  fontWeight1: {
    paddingTop: "20px",
  },
  oderbackground: {
    backgroundColor: "#ebf3f9",
  },
  netpaybackground: {
    backgroundColor: "#a8d0f3",
  },
  tabletext: {
    fontSize: "12px",
    fontWeight: 600,
    paddingTop: "5px",
  },
  netbackground: {
    backgroundColor: "#a8d0f3",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  nettext: {
    fontWeight: "600",
  },
  ratebackground: {
    backgroundColor: "#428bca",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  ratetext: {
    fontWeight: "600",
    color: "#fff",
  },
  mediastting: {
    backgroundColor: "#fff",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={10} my={10} className={classes.mediastting}>
        <Grid container justify="center" spacing={3}>
          <Grid item lg={10}>
            <Box p={2} className={classes.background}>
              <Typography className={classes.paytext}>Paystub</Typography>
              <Typography className={classes.paytext}>jan 29th 2021</Typography>
            </Box>
            <Box p={2} className={classes.logobackground}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box textAlign="center" mx="auto">
                    <img
                      className={classes.imglogopink}
                      src={PinkLogo}
                      alt="Dojo"
                      height="auto"
                      width="60%"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box pt={3}>
                    <Typography className={classes.fontWeight}>
                      Company information:
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      Indulge Salon And Day Spa
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      PO Box 3366 Omak
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      WA 98841
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box borderTop="1px solid blue">
              <Grid container>
                <Grid item xs={12}>
                  <Box className={classes.oderbackground} p={2}>
                    <Typography className={classes.fontWeight}>
                      Pay to the oder of : Elijah M.Weber
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={2} className={classes.netpaybackground}>
                    <Typography className={classes.fontWeight}>
                      Net Pay: <span>$15.22</span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.oderbackground}>
              <Grid container>
                <Grid item xs={12}>
                  <Box p={2}>
                    <Typography className={classes.fontWeight}>
                      Empolyee Information
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      Reporting Period
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      Elijah M.Weber
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      407 Maple St, Okanogan
                    </Typography>
                    <Typography className={classes.fontWeight}>
                      Washington, WA
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={2}>
                    <Typography className={classes.fontWeight}>
                      poriod:{" "}
                      <span className={classes.fontWeight1}>
                        jan 15th-jan 28th 2021
                      </span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.oderbackground}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Earnings:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>
                    Regular Earnings
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>Rates:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$13.55</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>Hours:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$1.23</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Gross Pay:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$16.65</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Gross Pay:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$351.22</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>
                    Fed Income Tax
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>0.00</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>0.00</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.logobackground}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>
                    Social Security
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$1.02</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$1.02</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.oderbackground}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>
                    Medicare
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$0.55</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>0.00</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.logobackground}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>L&I</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$0.12</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>2.44</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.oderbackground}
            >
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>PF & ML</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$0.04</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>2.44</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box p={2} className={classes.background1}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>Total</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    Current Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>$0.04</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.tabletext}>
                    YTD Deductions:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.tabletext}>2.44</Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid container>
              <Grid item sm={4} xs={12}></Grid>
              <Grid item sm={8} xs={12}>
                <Container fixed>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box
                        mt={4}
                        textAlign="left"
                        p={2}
                        className={classes.netbackground}
                      >
                        <Typography className={classes.nettext}>
                          {" "}
                          Net Pay:
                        </Typography>
                        <Typography className={classes.nettext}>
                          {" "}
                          TYD Net:
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        mt={4}
                        textAlign="left"
                        p={2}
                        className={classes.ratebackground}
                      >
                        <Typography className={classes.ratetext}>
                          {" "}
                          $15.22
                        </Typography>
                        <Typography className={classes.ratetext}>
                          {" "}
                          $15.22
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Box mt={7} textAlign="right">
              <IconButton onClick={() => window.print()} variant="contained">
                <img src={Print} alt="Dojo" height="auto" width="80" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
