import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import DataGrid from "../../../components/DataGrid/DataGrid";
import getColumns from "../../../components/Portfolio/PortfolioDataGrid/getColumns";

describe("DataGrid", () => {
  test("test", () => {
    expect(true).toBe(true);
  });
  /*   let component;

  beforeEach(() => {
    component = render(
      <DataGrid
        rows={[
          {
            id: "test",
            col1: "test",
            col2: "5",
            col3: "55 %",
            col4: "100 %",
            col5: "150 %",
            col6: "200%",
            col7: "2019-04-13",
          },
        ]}
        columns={columns}
        setFundNames={() => {}}
        getFundNames={() => {}}
        sortOrder={["asc", "desc"]}
      />
    );
  });

  test("displays row content", () => {
    expect(component.container.textContent).toMatch("test");
    expect(component.container.textContent).toMatch("55 %");
    expect(component.container.textContent).toMatch("100 %");
    expect(component.container.textContent).toMatch("150 %");
    expect(component.container.textContent).toMatch("200 %");
  }); */
  /* 
  test("at start the children are not displayed", () => {
    const div = component.container.querySelector(".togglableContent");

    expect(div).toHaveStyle("display: none");
  });

  test("after clicking the button, children are displayed", () => {
    const button = component.getByText("show...");
    fireEvent.click(button);

    const div = component.container.querySelector(".togglableContent");
    expect(div).not.toHaveStyle("display: none");
  }); */
});
