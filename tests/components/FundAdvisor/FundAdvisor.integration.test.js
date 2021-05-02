import React from "react";
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
  beforeEach(() => {
    renderWithProviders(<FundAdvisor />, {
      initialState,
    });
  });

  it("Displays the first recommended fund and allows navigation between recommendations", () => {
    expect(document.body).toHaveTextContent("Buy");
    expect(document.body).toHaveTextContent("Fidelity China Focus A-Acc-USD");

    const nextButton = screen.getByTestId("nextButton");
    const backButton = screen.getByTestId("backButton");

    fireEvent(nextButton, new MouseEvent("click", { bubbles: true }));

    expect(document.body).not.toHaveTextContent(
      "Fidelity China Focus A-Acc-USD"
    );
    expect(document.body).toHaveTextContent("GS India Equity Base Acc USD");

    fireEvent(backButton, new MouseEvent("click", { bubbles: true }));

    expect(document.body).toHaveTextContent("Fidelity China Focus A-Acc-USD");
  });

  it("Chart canvas is rendered", () => {
    renderWithProviders(<FundAdvisor />, {
      initialState: {
        ...initialState,
        chart: {
          ...initialState.chart,
          isChartShowingForSmallScreens: true,
        },
      },
    });

    const canvas = screen.getByTestId("chart");

    expect(canvas).toBeTruthy();
  });
});
