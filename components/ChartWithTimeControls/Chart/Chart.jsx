import React, { useEffect, useRef } from "react";
import ChartJSChart from "chart.js";
import "chartjs-plugin-downsample";
import styled from "styled-components";
import getChartConfig from "./getChartConfig";
import getChartDataset from "./getChartDataset";
import { useSelector } from "react-redux";
import {
  getArePatternsShowing,
  getData,
  getDateParameters,
  getIsDataDownsampled,
  getIsDataInPercent,
  getPatterns,
} from "../../../redux/selectors";
import { TIME_CONTROLS_HEIGHT } from "../TimeControls/TimeControls";

const ChartContainer = styled.div`
  width: 100%;
  height: ${`calc(100% - ${TIME_CONTROLS_HEIGHT}px)`};
  position: relative;
`;

const canvasID = "chartCanvas";

const Chart = ({ fundNames }) => {
  const isDataDownsampled = useSelector((state) => getIsDataDownsampled(state));
  const data = useSelector((state) => getData(state));
  const isDataInPercent = useSelector((state) => getIsDataInPercent(state));
  const patterns = useSelector((state) => getPatterns(state));
  const dateParameters = useSelector((state) => getDateParameters(state));
  const arePatternsShowing = useSelector((state) =>
    getArePatternsShowing(state)
  );

  const chartRef = useRef();

  useEffect(() => {
    const datasets = fundNames.map((name, index) =>
      getChartDataset({
        data,
        fundName: name,
        isDataInPercent,
        dateParameters,
        patterns,
        arePatternsShowing,
        index,
      })
    );

    //Chart will move when moused over along with other buggy behavior if the previous chart instance is not destroyed
    if (chartRef.current !== undefined && chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new ChartJSChart(
      canvasID,
      getChartConfig(datasets, isDataDownsampled)
    );
  }, [
    data,
    dateParameters,
    fundNames,
    isDataDownsampled,
    isDataInPercent,
    patterns,
    arePatternsShowing,
  ]);

  return (
    <ChartContainer>
      <canvas
        data-testid="chart"
        role="img"
        aria-label="A chart displaying selected fund courses over time"
        id={canvasID}
      />
    </ChartContainer>
  );
};

export default Chart;
