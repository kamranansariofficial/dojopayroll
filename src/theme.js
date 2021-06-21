import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".slick-prev:before": {
          display: "none",
        },
        ".slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-prev:focus":
          {
            backgroundColor: "transparent!important",
            color: "inherit",
          },
        ".slick-next:before": {
          display: "none",
        },
        ".slick-next:hover, .slick-next:focus, .slick-next:hover, .slick-next:focus":
          {
            backgroundColor: "transparent!important",
            color: "inherit",
          },
        ".slick-arrow": {
          position: "absolute!important",
        },
        "a": {
          textDecoration: "none",
        },
        "@media (min-width: 1280px)":{
          ".MuiContainer-maxWidthLg" :{
          maxWidth: "1140px!important"
          }
         },
         "@media (max-width: 576px)": {
          ".slick-prev":{
            left:-5
          },
          ".slick-next":{
            right: -10
          }
         }
      },
    },
  },

  palette: {
    primary: {
      main: "#5f4dee",
    },
    secondary: {
      main: "#df7e0f",
    },
    default: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
});
export default theme;
