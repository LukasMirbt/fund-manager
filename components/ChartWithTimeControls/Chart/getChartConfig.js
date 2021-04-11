const padding = 24;

const getChartConfig = (datasets, isDataDownsampled) => ({
  type: "line",
  data: {
    datasets,
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      displayColors: false,
    },
    layout: {
      padding: {
        left: padding,
        right: padding,
        top: padding,
        bottom: padding,
      },
    },
    elements: {
      line: {
        fill: false,
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "round",
        tension: 0,
      },
    },
    downsample: {
      enabled: isDataDownsampled === true,
      threshold: isDataDownsampled === true ? 100 : "",
    },
    legend: {
      position: "top",
    },
    scales: {
      xAxes: [
        {
          time: {
            tooltipFormat: "ll",
          },
          gridLines: {
            display: false,
          },
          type: "time",
        },
      ],
    },
    animation: {
      duration: 0,
    },
    hover: {
      animationDuration: 0,
    },
    responsiveAnimationDuration: 0,
  },
});

export default getChartConfig;
