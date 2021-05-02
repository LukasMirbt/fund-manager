import React from "react";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import DataGrid from "../../../components/DataGrid/DataGrid";
import { getPortfolioFundNames, getData } from "../../../redux/selectors";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { renderWithProviders } from "../../test-utils";
import { rows, columns } from "./testData";

/* Some tests in this file assert on implementation details (e.g. Redux state) which makes them somewhat brittle. 
  This is because all the UI changes that are supposed to happen take place in a canvas. 
  As an improvement suggestion, elements such as chart labels could be rendered directly into the DOM, 
  which would both improve accessibility and reduce test brittleness but since this is 
  a personal project I have settled on the current implementation. */

const initialState = {
  fundList: {
    isFundListShowing: true,
  },
  general: {
    fundNamesCurrentlyBeingLoaded: [],
    data: {
      test: {
        chartData: {},
      },
    },
  },
  portfolio: {
    portfolioFundNames: [],
  },
  chart: {
    isChartShowing: true,
    isChartShowingForSmallScreens: false,
  },
};

const componentToRender = (
  <div>
    <DataGrid
      autoHeight
      columnBuffer={columns.length}
      rows={rows}
      columns={columns}
      setFundNames={setPortfolioFundNames}
      getFundNames={getPortfolioFundNames}
      sortingOrder={["asc", "desc"]}
    />
  </div>
);

describe("Portfolio", () => {
  it("DataGrid displays content", () => {
    renderWithProviders(componentToRender, {
      initialState,
    });

    expect(document.body).toHaveTextContent("test");
    expect(document.body).toHaveTextContent("55 %");
    expect(document.body).toHaveTextContent("100 %");
    expect(document.body).toHaveTextContent("150 %");
    expect(document.body).not.toHaveTextContent("200 %");
    expect(document.body).not.toHaveTextContent("2019-04-13");
  });

  it("Checkbox selection removes and adds funds to state correctly", () => {
    const store = renderWithProviders(componentToRender, {
      initialState,
    });

    const checkbox = document.body.querySelectorAll("input")[1];

    expect(checkbox.checked).toBe(false);
    expect(getPortfolioFundNames(store.getState()).includes("test")).toBe(
      false
    );

    fireEvent(checkbox, new MouseEvent("click", { bubbles: false }));

    expect(checkbox.checked).toBe(true);
    expect(getPortfolioFundNames(store.getState()).includes("test")).toBe(true);

    fireEvent(checkbox, new MouseEvent("click", { bubbles: false }));

    expect(checkbox.checked).toBe(false);
    expect(getPortfolioFundNames(store.getState()).includes("test")).toBe(
      false
    );
  });

  it("Checkbox selection fetches data if necessary", async () => {
    const store = renderWithProviders(componentToRender, {
      initialState: {
        ...initialState,
        general: {
          ...initialState.general,
          /* test.chartData is undefined which causes getChartData to be called 
          when the checkbox is checked */
          data: { test: {} },
        },
      },
    });

    const checkbox = screen.getByLabelText("Add fund to chart");

    expect(getData(store.getState()).test.chartData).toBeUndefined();

    fireEvent(checkbox, new MouseEvent("click", { bubbles: false }));

    await waitFor(() => {}); //need to wait for an inner async function here (getChartData) or this assertion will fail
    expect(getData(store.getState()).test.chartData).toBe("loadedChartData");
  });
});
