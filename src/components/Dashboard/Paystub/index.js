import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, Container, IconButton } from "@material-ui/core";
import PinkLogo from "../../assets/images/pink-logo.png";
import Print from "../../assets/images/print.png";
import MobilePayStub from "./Mobileview/index";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  background: {
    backgroundColor: "#428bca",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  background1: {
    backgroundColor: "#428bca",
  },
  paytext: {
    color: "#fff",
    fontWeight: 600,
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
    fontWeight: 700,
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mx={5} className={classes.mediastting}>
        <Grid container justify="center" spacing={3}>
          <Grid item lg={10}>
            <Box p={2} className={classes.background}>
              <Typography className={classes.paytext}>
                Paystub <span className={classes.float}>jan 29th 2021</span>
              </Typography>
            </Box>
            <Box p={2} className={classes.logobackground}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img src={PinkLogo} alt="Dojo" height="auto" width="60%" />
                </Grid>
                <Grid item xs={6}>
                  <Box pt={3} pl={20}>
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
                <Grid item xs={8}>
                  <Box className={classes.oderbackground} p={2}>
                    <Typography className={classes.fontWeight}>
                      Pay to the oder of : Elijah M.Weber
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box p={2} className={classes.netpaybackground}>
                    <Typography className={classes.fontWeight}>
                      Net Pay: <span className={classes.float}>$15.22</span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.background1}>
              <Grid container>
                <Grid item xs={8}>
                  <Box p={2}>
                    <Typography className={classes.fontWeight}>
                      Empolyee Information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box p={2}>
                    <Typography className={classes.fontWeight}>
                      Reporting Period
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.oderbackground}>
              <Grid container>
                <Grid item xs={8}>
                  <Box p={2}>
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
                <Grid item xs={4}>
                  <Box p={2}>
                    <Typography className={classes.fontWeight1}>
                      jan 15th-jan 28th 2021
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box p={2} className={classes.background1}>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}>
                    Earnings
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>Rates</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>Hours</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>
                    Gross Pay
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}>
                      YTD Gross Pay
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>
                      Deductions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>
                      Current Deductions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>
                      YTD Deductions
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box p={2} className={classes.oderbackground}>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}>
                    Regular Earnings
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>$13.55</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>$1.23</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>$16.65</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}>
                      $351.22
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}>
                      Fed Income Tax
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.00</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.00</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.logobackground}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}></Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}>
                      Social Security
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>1.03</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>1.03</Typography>
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
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}></Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}>
                      Medicare
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.24</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.24</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderTop="1px solid blue"
              p={2}
              className={classes.logobackground}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}></Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}>L&I</Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.12</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>2.44</Typography>
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
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}></Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}>
                      PF & ML
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.44</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>0.89</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box p={2} className={classes.background1}>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.tabletext}>Total</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}></Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography className={classes.tabletext}>$16.65</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="center">
                    <Typography className={classes.tabletext}>
                      $351.22
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="left">
                    <Typography className={classes.tabletext}></Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>1.44</Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign="right">
                    <Typography className={classes.tabletext}>1.43</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
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
                    <Grid item xs={4}>
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
              <IconButton onClick={()=>window.print()} variant="contained">
                <img src={Print} alt="Dojo" height="auto" width="80" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <MobilePayStub />
    </div>
  );
}
