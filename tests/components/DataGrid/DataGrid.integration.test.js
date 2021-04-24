import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, waitFor } from "@testing-library/react";
import DataGrid from "../../../components/DataGrid/DataGrid";
import { getPortfolioFundNames, getData } from "../../../redux/selectors";
import { setPortfolioFundNames } from "../../../redux/portfolio/actionCreators";
import { renderWithProviders } from "../../test-utils";
import {
  rows,
  columns,
} from "./testData";

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
  let component;
  let store;

  beforeEach(() => {
    ({ component, store } = renderWithProviders(componentToRender, {
      initialState,
    }));
  });

  it("DataGrid displays content", () => {
    expect(component.container.textContent).toMatch("test");
    expect(component.container.textContent).toMatch("55 %");
    expect(component.container.textContent).toMatch("100 %");
    expect(component.container.textContent).toMatch("150 %");
    expect(component.container.textContent).not.toMatch("200 %");
    expect(component.container.textContent).not.toMatch("2019-04-13");
  });

  it("Checkbox selection removes and adds funds to state correctly", () => {
    const checkbox = component.container.querySelectorAll("input")[1];

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
    const modifiedInitialState = {
      ...initialState,
      general: {
        ...initialState.general,
        /* test.chartData is undefined which causes getChartData to be called 
        when the checkbox is checked */
        data: { test: {} },
      },
    };

    ({ component, store } = renderWithProviders(componentToRender, {
      initialState: modifiedInitialState,
    }));

    const checkbox = component.container.querySelectorAll("input")[1];

    expect(getData(store.getState()).test.chartData).toBeUndefined();

    fireEvent(checkbox, new MouseEvent("click", { bubbles: false }));

    await waitFor(() => {}); //need to wait for an inner async function here (getChartData) or this assertion will fail
    expect(getData(store.getState()).test.chartData).toBe("loadedChartData");
  });
});
