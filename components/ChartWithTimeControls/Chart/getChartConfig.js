const getChartConfig = (
  datasets,
  isDataDownsampled
  /*   min,
  max */
) => ({
  type: "line",
  data: {
    datasets,
  },
  options: {
    /*     responsive: false, */
    maintainAspectRatio: false,
    tooltips: {
      displayColors: false,
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
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
      /*       display: false, */
      position: "top",
      /*       labels: {
        boxWidth: 0,
      }, */
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
            /*          min,
            max, */
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
