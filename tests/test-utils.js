import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { initStore } from "../redux/store";
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core/styles";
import theme from "../components/theme";
import { ThemeProvider } from "styled-components";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const renderWithProviders = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = initStore(initialState);

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StylesProvider injectFirst>
            <MUIThemeProvider theme={theme}>
              <ThemeProvider theme={theme}>{children} </ThemeProvider>
            </MUIThemeProvider>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    );
  }
  return {
    component: render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
};
