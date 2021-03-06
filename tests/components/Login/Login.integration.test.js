import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Login from "../../../components/Login/Login";

const initialState = {
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
  beforeEach(() => {
    renderWithProviders(componentToRender, {
      initialState,
    });
  });

  it("Shows error on invalid login attempt", () => {
    const signInButton = document.querySelector('[data-cy="signInButton"]');
    const usernameInputLabel = document.getElementById("username-label");
    const passwordInputLabel = document.getElementById("password-label");

    fireEvent(signInButton, new MouseEvent("click", { bubbles: true }));

    expect(usernameInputLabel).toHaveClass("Mui-error");
    expect(passwordInputLabel).toHaveClass("Mui-error");

    expect(document.getElementById("username-helper-text")).toBeTruthy();
    expect(document.getElementById("password-helper-text")).toBeTruthy();
  });

  it("Can navigate from sign-in to sign-up and back", () => {
    const goToSignUpLink = screen.getByTestId("goToSignUpLink");

    fireEvent(goToSignUpLink, new MouseEvent("click", { bubbles: true }));

    expect(document.querySelector('[data-cy="signUpButton"]')).toBeTruthy();
    expect(document.querySelector('[data-cy="signInButton"]')).toBeNull();

    const goToSignInLink = screen.getByTestId("goToSignInLink");

    fireEvent(goToSignInLink, new MouseEvent("click", { bubbles: true }));

    expect(document.querySelector('[data-cy="signUpButton"]')).toBeNull();
    expect(document.querySelector('[data-cy="signInButton"]')).toBeTruthy();
  });
});
