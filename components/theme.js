import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const primaryColor = "#020887";
const primaryColorHover = "rgb(48,163,20)";
const primaryColorActive = "rgb(102,187,82)";
const secondaryColor = "#F9F871";
const secondaryColorHover = "rgb(20,75,163)";

const drawerSpacingTopREM = "1rem";
const drawerSpacingBottomREM = "0.5rem";
const drawerWidth = 240;

let MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  /*   props: {
    MuiUseMediaQuery: {
      noSsr: true,
    },
  }, */
});

MUITheme = responsiveFontSizes(MUITheme);

const theme = {
  ...MUITheme,
  primaryColorHover,
  primaryColorActive,
  secondaryColor,
  secondaryColorHover,
  drawerSpacingTopREM,
  drawerSpacingBottomREM,
  drawerWidth,
};

export default theme;
