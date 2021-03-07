const getChartConfig = (
  datasets,
  REMInPXNumber,
  isDataDownsampled,
  min,
  max
) => ({
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
        left: 1.25 * REMInPXNumber,
        right: 1.25 * REMInPXNumber,
        top: 1.25 * REMInPXNumber,
        bottom: 1.25 * REMInPXNumber,
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
      display: false,
      position: "top",
      labels: {
        boxWidth: 0,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            /* fontSize: 0.75 * REMInPXNumber */
          },
          time: {
            tooltipFormat: "ll",
          },
          gridLines: {
            display: false,
          },
          type: "time",
        },
      ],
      yAxes: [
        {
          ticks: {
            /* fontSize: 0.75 * REMInPXNumber, */
            min,
            max,
          },
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
