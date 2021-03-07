import React, { useEffect, useCallback } from "react";
import ChartJSChart from "chart.js";
import "chartjs-plugin-downsample";
import styled from "styled-components";
import getChartConfig from "./getChartConfig";
import usePixelsPerREM from "../../common/hooks/usePixelsPerREM";

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CHART_ID = "chartID";
const CANVAS_ID = "chartCanvas";

const ChartComponent = ({
  datasets,
  max,
  min,
  mainFundName,
  isDataDownsampled,
}) => {
  const pixelsPerREM = 16; /* usePixelsPerREM(); */

  const drawChart = useCallback(() => {
    const canvasElement = document.getElementById(CANVAS_ID);

    const context =
      canvasElement !== null ? canvasElement.getContext("2d") : undefined;

    if (window[CHART_ID] !== undefined && window[CHART_ID] !== null) {
      window[CHART_ID].destroy();
    }

    if (context !== undefined) {
      window[CHART_ID] = new ChartJSChart(
        context,
        getChartConfig(datasets, pixelsPerREM, isDataDownsampled, min, max)
      );
    }
  }, [datasets, min, max, isDataDownsampled, pixelsPerREM]);

  useEffect(() => {
    drawChart();
  }, [
    drawChart,
    datasets,
    min,
    max,
    mainFundName,
    isDataDownsampled,
    pixelsPerREM,
  ]);

  return (
    <ChartContainer id="chartContainer">
      <canvas data-testid="Chart" id={CANVAS_ID} />
    </ChartContainer>
  );
};

export default ChartComponent;
