import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  icons: {
    backgroundColor: "#5f4dee",
    marginLeft: "5px",
    marginRight: "5px",
    color: "#fff",
    borderRadius: "50%",
    "&:hover": {
      color: "#5f4dee",
    },
  },
  footer: {
    backgroundColor: "#5f4dee",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  footertext: {
    color: "#f3f7fd",
    fontSize: "14px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box py={10}>
        <Container fixed>
          <Box textAlign="center">
            <IconButton
              className={classes.icons}
              aria-label="delete"
              size="medium"
            >
              <FaFacebookF fontSize="inherit" />
            </IconButton>
            <IconButton
              className={classes.icons}
              aria-label="delete"
              size="medium"
            >
              <FaTwitter fontSize="inherit" />
            </IconButton>
            <IconButton
              className={classes.icons}
              aria-label="delete"
              size="medium"
            >
              <FaInstagram fontSize="inherit" />
            </IconButton>
            <IconButton
              className={classes.icons}
              aria-label="delete"
              size="medium"
            >
              <FaLinkedinIn fontSize="inherit" />
            </IconButton>
          </Box>
        </Container>
      </Box>
      <Box textAlign="center" className={classes.footer}>
        <Container fixed>
          <Box py={2} borderTop="1px solid #718ad1">
            <Typography className={classes.footertext}>
              © 2020 Dojo Payroll
            </Typography>
          </Box>
          <Box pt={2} borderTop="1px solid #718ad1">
            <Typography className={classes.footertext}>
              Developer:@Qubzen
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
