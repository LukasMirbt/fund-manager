import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Login from "../../../components/Login/Login";

const initialState = {
  general: {
    data: {},
    exchangeRates: {
      USD: 10,
      EUR: 10,
    },
    alertSettings: {
      isOpen: false,
      text: "",
      severity: "success",
    },
  },
  login: {
    credentials: {},
    signInUsernameInputValue: "",
    signInPasswordInputValue: "",

    signInUsernameErrorMessage: null,
    signInPasswordErrorMessage: null,

    signUpUsernameInputValue: "",
    signUpPasswordInputValue: "",

    signUpUsernameErrorMessage: null,
    signUpPasswordErrorMessage: null,

    isSignUpShowing: false,
    isUserRemembered: false,
  },
};

const componentToRender = (
  <div>
    <Login />
  </div>
);

describe("Login", () => {
  let component;

  beforeEach(() => {
    ({ component } = renderWithProviders(componentToRender, {
      initialState,
    }));
  });

  it("Shows error on invalid login attempt", async () => {
    const signInButton = document.querySelector('[data-cy="signInButton"]');
    const usernameInputLabel = document.getElementById("username-label");
    const passwordInputLabel = document.getElementById("password-label");

    fireEvent(signInButton, new MouseEvent("click", { bubbles: true }));

    expect(usernameInputLabel).toHaveClass("Mui-error");
    expect(passwordInputLabel).toHaveClass("Mui-error");

    expect(document.getElementById("username-helper-text")).toBeTruthy();
    expect(document.getElementById("password-helper-text")).toBeTruthy();
  });
});
