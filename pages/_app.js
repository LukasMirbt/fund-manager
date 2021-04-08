import { useEffect } from "react";
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core/styles";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import theme from "../components/theme";
import AppBar from "../components/AppBar/AppBar";
import Drawer from "../components/Drawer/Drawer";
import Snackbar from "../components/common/components/Snackbar";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import DateFnsUtils from "@date-io/date-fns";

config.autoAddCss = false;

const Row = styled.div`
  display: flex;
  height: calc(100% - 56px);
  overflow: auto;

  @media (min-width: 0px) and (orientation: landscape) {
    height: calc(100% - 48px);
  }

  @media (min-width: 600px) {
    height: calc(100% - 64px);
  }
`;

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StylesProvider injectFirst>
          <MUIThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <>
                <AppBar />

                <Row>
                  <Drawer />

                  <Component {...pageProps} />
                  <Snackbar />
                </Row>
              </>
            </ThemeProvider>
          </MUIThemeProvider>
        </StylesProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
