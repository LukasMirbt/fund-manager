import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import FundAdvisor from "../../../components/FundAdvisor/FundAdvisor";
import { data, recommendedFunds } from "./testData";

const initialState = {
  general: {
    data,
  },
  fundList: {
    isFundListShowing: true,
  },
  chart: {
    isChartShowingForSmallScreens: false,
    isChartShowing: true,
    selectedTimespan: "max",
    isDataDownsampled: true,
    isDataInPercent: true,
    patterns: [],
    arePatternsShowing: false,
    dateParameters: {
      start: null,
      end: null,
    },
  },
  fundAdvisor: {
    recommendedFunds,
  },
};

describe("FundAdvisor", () => {
  let component;

  it("Displays the first recommended fund allows navigation between recommendations", () => {
    ({ component } = renderWithProviders(<FundAdvisor />, {
      initialState,
    }));

    const { container } = component;
    expect(container.textContent).toMatch("Buy");
    expect(container.textContent).toMatch("Fidelity China Focus A-Acc-USD");

    const nextButton = screen.getByTestId("nextButton");
    const backButton = screen.getByTestId("backButton");

    fireEvent(nextButton, new MouseEvent("click", { bubbles: true }));

    expect(container.textContent).not.toMatch("Fidelity China Focus A-Acc-USD");
    expect(container.textContent).toMatch("GS India Equity Base Acc USD");

    fireEvent(backButton, new MouseEvent("click", { bubbles: true }));

    expect(container.textContent).toMatch("Fidelity China Focus A-Acc-USD");
  });

  const modifiedInitialState = {
    ...initialState,
    chart: {
      ...initialState.chart,
      isChartShowingForSmallScreens: true,
    },
  };

  it("Chart canvas is rendered", () => {
    ({ component } = renderWithProviders(<FundAdvisor />, {
      initialState: modifiedInitialState,
    }));

    const canvas = screen.getByTestId("chart");

    expect(canvas).toBeTruthy();
  });
});
