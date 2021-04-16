import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const primaryColor = "#020887";
const secondaryColor = "#F9F871";

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
});

MUITheme.breakpoints.values["lg"] = 1500;

MUITheme = responsiveFontSizes(MUITheme);

const theme = {
  ...MUITheme,
  secondaryColor,
  drawerWidth,
};

export default theme;
