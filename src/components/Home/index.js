import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import Description1 from "../assets/images/description-1.png";
import Description2 from "../assets/images/description-2.png";
import Description3 from "../assets/images/description-3.png";
import Run from "../assets/images/run.png";
import Hand from "../assets/images/ai-hand.png";
import Pro from "../assets/images/elegant-pro.png";
import Start from "../assets/images/elegant-start.png";
import Ultimate from "../assets/images/elegant-ultimate.png";
import testimonial from "../assets/images/testimonial-1.jpeg";
import StopIcon from "@material-ui/icons/Stop";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../App.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  herobg: {
    backgroundColor: "#5f4dee",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingTop: "20px",
    },
  },
  textfont: {
    fontSize: "56px",
    fontWeight: "bold",
    color: "#fff",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "40px",
    },
  },
  ptext: {
    fontSize: "18px",
    marginBottom: "2rem",
    color: "#f3f7fd",
  },
  sginbtn: {
    color: "#5f4dee",
    backgroundColor: "#f3f7fd",
    borderRadius: "2rem",
    padding: "10px 35px",
    fontWeight: "bold",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "#5f4dee",
      color: "#fff",
      border: "2px solid #fff",
    },
  },
  headingtext: {
    paddingTop: "15px",
    fontSize: "32px",
    fontWeight: 700,
    color: "#333333",
  },
  Descriptionheading: {
    paddingTop: "10px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#333333",
    textAlign: "center",
  },
  Descriptiontext: {
    paddingTop: "10px",
    fontSize: "16px",
    fontWeight: 400,
    color: "#555555",
    textAlign: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    lineHeight: "26px",
  },
  handheading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#333333",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "30px",
    },
  },
  handtext: {
    paddingTop: "20px",
    fontSize: "16px",
    color: "#555555",
  },
  StopIcon: {
    color: "#5f4dee",
    textAlign: "center",
    transform: "translate(0px, 5px)",
    paddingRight: "10px",
  },
  handbtn: {
    marginTop: "25px",
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#5f4dee",
    borderRadius: "2rem",
    padding: "10px 35px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5f4dee",
      border: "2px solid #5f4dee",
    },
  },
  pricerate: {
    fontSize: "60px",
    color: "#3FA1D3",
  },
  pricemonth: {
    fontSize: "20px",
    color: "#919191",
  },
  pricetag: {
    fontSize: "20px",
    color: "#919191",
  },

  paper: {
    textAlign: "center",
    paddingTop: "100px",
    boxShadow: "0px 10px 20px 0px grey",
    background: "linear-gradient(to bottom, #fff 60%, #999999 150%)",
  },
  priceimg: {
    position: "absolute",
    Zindex: 9999,
    left: "50%",
    transform: "translateX(-50%)",
    top: "-20px",
  },
  pricebox3: {
    position: "relative",
    right: 70,
    marginTop: "35px",
    [theme.breakpoints.between("xs", "sm")]: {
      right: 0,
    },
  },
  pricebox2: {
    position: "relative",
    zIndex: "99",
  },
  pricebox1: {
    position: "relative",
    left: 70,
    marginTop: "35px",
    [theme.breakpoints.between("xs", "sm")]: {
      left: 0,
    },
  },
  priceoptn: {
    fontSize: "32px",
    fontWeight: 700,
  },
  priceclick: {
    fontSize: "18px",
    color: "#919191",
  },
  imgtestimonial: {
    borderRadius: "50%",
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
      width: "30%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  slidertext: {
    paddingTop: "30px",
    fontSize: "16px",
    color: "#555555",
    fontStyle: "italic",
  },
  sliderheading: {
    paddingTop: "10px",
    fontSize: "16px",
    color: "#333333",
    fontWeight: 700,
  },
  mediastting: {
    [theme.breakpoints.between("xs", "md")]: {
      textAlign: "center",
      fontSize: "2.5rem",
    },
  },
  meditext: {
    [theme.breakpoints.between("xs", "md")]: {
      textAlign: "center",
    },
  },
  arrowicon: {
    fontSize: "50px",
    color: "#5555",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <IconButton disableRipple className="slick-icon">
        <ArrowBackIosIcon className={classes.arrowicon} />
      </IconButton>
    ),
    nextArrow: (
      <IconButton disableRipple className="slick-icon">
        <ArrowForwardIosIcon className={classes.arrowicon} />
      </IconButton>
    ),
    //
  };
  return (
    <div className={classes.root}>
      <Navbar />
      <Box className={classes.herobg} pt={20}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className={classes.mediastting} pt={10}>
                <Typography className={classes.textfont} variant="h1">
                  AI Meet Payroll
                </Typography>
                <Typography className={classes.textfont} variant="h1">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .start()
                        .typeString("Grow Faster")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Auto Mate,")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Run Faster,")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </Typography>
                <Typography className={classes.ptext} variant="h6">
                  Smart AI To Automate Your Payroll & Taxes.
                </Typography>
                <Link to="/sign-up">
                  <Button
                    className={classes.sginbtn}
                    variant="contained"
                    size="large"
                  >
                    SIGN UP
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <img src={Run} alt="Run" height="auto" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={5} textAlign="center">
        <Typography className={classes.headingtext} variant="h1">
          Payroll Automation frees up your time to be creative.
        </Typography>
      </Box>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} xs={12}>
            <Box textAlign="center">
              <img
                src={Description1}
                alt="Description1"
                height="auto"
                width="50%"
              />
              <Typography className={classes.Descriptionheading} variant="h1">
                Focus on what matters
              </Typography>
              <Typography className={classes.Descriptiontext} variant="h1">
                Free up your time to build, connect with customer, increase the
                bottom line
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <Box textAlign="center">
              <img
                src={Description2}
                alt="Description2"
                height="auto"
                width="50%"
              />
              <Typography className={classes.Descriptionheading} variant="h1">
                Be More Creative
              </Typography>
              <Typography className={classes.Descriptiontext} variant="h1">
                Create new products, new features, sign up more customers. Do
                what you always want to do, no more payroll distrations.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <Box textAlign="center">
              <img
                src={Description3}
                alt="Description3"
                height="auto"
                width="50%"
              />
              <Typography className={classes.Descriptionheading} variant="h1">
                Analytics Tool
              </Typography>
              <Typography className={classes.Descriptiontext} variant="h1">
                Money metrics to see payroll expenses, which employee is bring
                more money and is most expensive, all at your finger tip.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box pt={40}>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12}>
              <Typography className={classes.handheading}>
                Now Is The Time To Join The AI Trend. Save Money and Time
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                Time tracking automation.
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                Generate Paystubs, on demand.
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                Automate Federal & State tax filing.
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                Keep your Bookkeeping in order and clean.
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                Our code can do all of these in 90 seconds.
              </Typography>
              <Typography className={classes.handtext}>
                <StopIcon className={classes.StopIcon} />
                We can do it better, faster and cheaper.
              </Typography>
              <Link to="/sign-up">
                <Button
                  className={classes.handbtn}
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  SIGN UP
                </Button>
              </Link>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <Box textAlign="center">
                <img src={Hand} alt="Hand" height="auto" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box pt={40} />
      <Container>
        <Box textAlign="center">
          <Box pb={8}>
            <Typography className={classes.priceoptn}>
              Pricing Options
            </Typography>
          </Box>
          <Container maxWidth="md">
            <Grid container spacing={7}>
              <Grid item sm={12} md={4} lg={4} xs={12}>
                <Box className={classes.pricebox1} textAlign="center">
                  <img
                    className={classes.priceimg}
                    src={Start}
                    alt="start"
                    height="auto"
                    width="125"
                  />
                  <Paper className={classes.paper}>
                    <Typography className={classes.pricerate} variant="h6">
                      <sup className={classes.pricetag}>$</sup>15
                      <sub className={classes.pricemonth}>/month</sub>
                    </Typography>
                    <Box py={3} color="#55555">
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                    </Box>
                    <Link to="/sign-up">
                      <Button
                        className={classes.handbtn}
                        color="primary"
                        variant="contained"
                        size="large"
                      >
                        SIGN UP
                      </Button>
                    </Link>
                    <Box pb={3} />
                  </Paper>
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={4} xs={12}>
                <Box className={classes.pricebox2} textAlign="center">
                  <img
                    className={classes.priceimg}
                    src={Pro}
                    alt="pro"
                    height="auto"
                    width="125"
                  />
                  <Paper className={classes.paper}>
                    <Typography className={classes.pricerate} variant="h6">
                      <sup className={classes.pricetag}>$</sup>25
                      <sub className={classes.pricemonth}>/month</sub>
                    </Typography>
                    <Box py={5} color="#55555">
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                    </Box>
                    <Button
                      className={classes.handbtn}
                      color="primary"
                      variant="contained"
                      size="large"
                    >
                      SIGN UP
                    </Button>
                    <Box pb={3} />
                  </Paper>
                </Box>
              </Grid>
              <Grid item sm={12} md={4} lg={4} xs={12}>
                <Box className={classes.pricebox3} pt={0.5} textAlign="center">
                  <img
                    className={classes.priceimg}
                    src={Ultimate}
                    alt="ultimate"
                    height="auto"
                    width="125"
                  />
                  <Paper className={classes.paper}>
                    <Typography className={classes.pricerate} variant="h6">
                      <sup className={classes.pricetag}>$</sup>35
                      <sub className={classes.pricemonth}>/month</sub>
                    </Typography>
                    <Box py={3} color="#55555">
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                      <Typography className={classes.priceclick}>
                        feature name
                      </Typography>
                    </Box>
                    <Link to="/sign-up">
                      <Button
                        className={classes.handbtn}
                        color="primary"
                        variant="contained"
                        size="large"
                      >
                        SIGN UP
                      </Button>
                    </Link>
                    <Box pb={2.5} />
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Box pt={10} />
      <Container fixed>
        <Slider className={classes.imgslider} {...settings}>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <img
                  className={classes.imgtestimonial}
                  src={testimonial}
                  alt="testimonial"
                  height="auto"
                  width="70%"
                />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box className={classes.mediaimg}>
                  <img
                    className={classes.imgtestimonial}
                    src={testimonial}
                    alt="testimonial"
                    height="auto"
                    width="70%"
                  />
                </Box>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box className={classes.mediaimg}>
                  <img
                    className={classes.imgtestimonial}
                    src={testimonial}
                    alt="testimonial"
                    height="auto"
                    width="70%"
                  />
                </Box>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box className={classes.mediaimg}>
                  <img
                    className={classes.imgtestimonial}
                    src={testimonial}
                    alt="testimonial"
                    height="auto"
                    width="70%"
                  />
                </Box>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box className={classes.mediaimg}>
                  <img
                    className={classes.imgtestimonial}
                    src={testimonial}
                    alt="testimonial"
                    height="auto"
                    width="70%"
                  />
                </Box>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box className={classes.mediaimg}>
                  <img
                    className={classes.imgtestimonial}
                    src={testimonial}
                    alt="testimonial"
                    height="auto"
                    width="70%"
                  />
                </Box>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box className={classes.meditext}>
                  <Typography className={classes.slidertext}>
                    Best payroll service out there. I especially love the Tax
                    Reporting Tools because it gives me such a peace of mind
                    knowing an AI will never forget to do my taxes like I do all
                    the time, thank you guys.
                  </Typography>
                  <Typography className={classes.sliderheading}>
                    Jude Thorn - Online Marketer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </Container>
      <Footer />
    </div>
  );
}
