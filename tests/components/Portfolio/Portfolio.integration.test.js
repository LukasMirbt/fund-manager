import React from "react";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import PortfolioChart from "../../../components/Portfolio/PortfolioChart";
import BuyFundFab from "../../../components/Portfolio/BuyFundFab";
import Info from "../../../components/Portfolio/Info/Info";
import { portfolio, portfolioTableDataByFundName } from "./testData";

const initialState = {
  general: {
    data: {},
  },
  portfolio: {
    portfolioFundNames: [],
    infoFundName: "JOHCM Global Select B EUR",
    portfolio,
  },
  chart: {
    isChartShowingForSmallScreens: true,
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
  fundList: {
    isFundListShowing: true,
  },
};

const componentToRender = (
  <div>
    <PortfolioChart />

    <div>
      <Info portfolioTableDataByFundName={portfolioTableDataByFundName} />

      <BuyFundFab />
    </div>
  </div>
);

describe("Portfolio", () => {
  beforeEach(() => {
    renderWithProviders(componentToRender, {
      initialState,
    });
  });

  it("Funds can be selected in the info section and the correct information is displayed", async () => {
    const autocomplete = document.getElementById("fundInfoAutocomplete");

    expect(autocomplete.value).toBe("JOHCM Global Select B EUR");
    expect(document.body).toHaveTextContent("100 shares");
    expect(document.body).toHaveTextContent("10290");

    autocomplete.focus();

    fireEvent.change(document.activeElement, {
      target: { value: "SEB Asienfond ex-Japan" },
    });

    await waitFor(() =>
      document.getElementById("fundInfoAutocomplete-option-1")
    );

    fireEvent.keyDown(document.activeElement, { key: "ArrowDown" });
    fireEvent.keyDown(document.activeElement, { key: "Enter" });

    expect(autocomplete.value).toBe("SEB Asienfond ex-Japan");

    expect(document.body).toHaveTextContent("50 shares");
    expect(document.body).toHaveTextContent("1800");
  });

  it("Chart canvas is rendered", () => {
    const canvas = screen.getByTestId("chart");

    expect(canvas).toBeTruthy();
  });
});
