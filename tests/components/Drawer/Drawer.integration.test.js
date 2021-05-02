import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Drawer from "../../../components/Drawer/Drawer";

const initialState = {
  general: {
    isTemporaryDrawerOpen: true,
    initialOpenDrawerTabIndex: null,
  },
  login: {
    credentials: {
      token: "",
      username: "",
    },
  },
  chart: {
    arePatternsShowing: true,
    isChartShowing: true,
    isDataDownsampled: true,
    isDataInPercent: true,

    dateParameters: {
      start: null,
      end: null,
    },
  },
  fundList: {
    isFundListShowing: true,
  },
};

const componentToRender = (
  <div>
    <Drawer />
  </div>
);

describe("Drawer", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender, {
      initialState,
    });
  });

  it("Renders links to all pages", () => {
    const fundListLink = document.querySelector('[data-cy="Fund list link"]');
    const fundAdvisorLink = document.querySelector(
      '[data-cy="Fund advisor link"]'
    );
    const portfolioLink = document.querySelector('[data-cy="Portfolio link"]');

    expect(fundListLink).toBeTruthy();
    expect(fundAdvisorLink).toBeTruthy();
    expect(portfolioLink).toBeTruthy();
  });

  it("Closes when menu button is clicked", () => {
    expect(document.querySelector("nav")).toBeTruthy();

    const openedMenuButton = screen.getByTestId("openedMenuButton");

    fireEvent(openedMenuButton, new MouseEvent("click", { bubbles: true }));

    expect(document.querySelector("nav")).toBeNull();
  });

  it("Closes when a click occurs outside the drawer", () => {
    expect(document.querySelector("nav")).toBeTruthy();

    const backdrop = document.querySelector(".MuiBackdrop-root");

    fireEvent(backdrop, new MouseEvent("click", { bubbles: true }));

    expect(document.querySelector("nav")).toBeNull();
  });

  it("Expands timespan settings when the timespan settings button is clicked", () => {
    renderWithProviders(componentToRender, {
      initialState,
      router: {
        pathname: "/fund-list",
      },
    });

    expect(document.getElementById("Timespan-content")).toBeNull();

    const timespanSettingsButton = document.getElementById("Timespan-header");

    fireEvent(
      timespanSettingsButton,
      new MouseEvent("click", { bubbles: true })
    );

    expect(document.getElementById("Timespan-content")).toBeTruthy();
  });

  it("Expands settings when the settings button is clicked", () => {
    renderWithProviders(componentToRender, {
      initialState,
      router: {
        pathname: "/fund-list",
      },
    });

    expect(document.getElementById("Settings-content")).toBeNull();

    const settingsButton = document.getElementById("Settings-header");

    fireEvent(settingsButton, new MouseEvent("click", { bubbles: true }));

    expect(document.getElementById("Settings-content")).toBeTruthy();
  });
});
