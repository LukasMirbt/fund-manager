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
import { RouterContext } from "next/dist/next-server/lib/router-context";

const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

export const renderWithProviders = (
  ui,
  { initialState, router, ...renderOptions } = {}
) => {
  const store = initStore(initialState);

  function Wrapper({ children }) {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <Provider store={store}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StylesProvider injectFirst>
              <MUIThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>{children} </ThemeProvider>
              </MUIThemeProvider>
            </StylesProvider>
          </MuiPickersUtilsProvider>
        </Provider>
      </RouterContext.Provider>
    );
  }
  return {
    component: render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
};
