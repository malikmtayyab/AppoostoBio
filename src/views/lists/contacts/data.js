//  Basic Line Charts
import getChartColorsArray from "@/common/getChartColorsArray";

// Zoomable Timeseries
const zoomableChart = {
  series: [
    {
      name: "Subscribers",
      data: [
        {
          x: new Date("2024-01-01").getTime(),
          y: 153,
        },
        {
          x: new Date("2024-01-02").getTime(),
          y: 149,
        },
        {
          x: new Date("2024-01-03").getTime(),
          y: 144,
        },
        {
          x: new Date("2024-01-05").getTime(),
          y: 150,
        },
        {
          x: new Date("2024-01-06").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-01-07").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-01-08").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-01-09").getTime(),
          y: 156,
        },
        {
          x: new Date("2024-01-11").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-01-12").getTime(),
          y: 140,
        },
        {
          x: new Date("2024-01-13").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-01-14").getTime(),
          y: 150,
        },
        {
          x: new Date("2024-01-15").getTime(),
          y: 154,
        },
        {
          x: new Date("2024-01-16").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-01-17").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-01-18").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-01-20").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-01-21").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-01-22").getTime(),
          y: 160,
        },
        {
          x: new Date("2024-01-23").getTime(),
          y: 165,
        },
        {
          x: new Date("2024-01-24").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-01-25").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-01-26").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-01-27").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-01-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-01-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-01-30").getTime(),
          y: 158,
        },
        {
          x: new Date("2023-9-01").getTime(),
          y: 153,
        },
        {
          x: new Date("2023-9-02").getTime(),
          y: 149,
        },
        {
          x: new Date("2023-9-03").getTime(),
          y: 144,
        },
        {
          x: new Date("2023-9-05").getTime(),
          y: 150,
        },
        {
          x: new Date("2023-9-06").getTime(),
          y: 155,
        },
        {
          x: new Date("2023-9-07").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-9-08").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-9-09").getTime(),
          y: 156,
        },
        {
          x: new Date("2023-9-11").getTime(),
          y: 151,
        },
        {
          x: new Date("2023-9-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2023-9-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2023-9-14").getTime(),
          y: 150,
        },
        {
          x: new Date("2023-9-15").getTime(),
          y: 154,
        },
        {
          x: new Date("2023-9-16").getTime(),
          y: 160,
        },
        {
          x: new Date("2023-9-17").getTime(),
          y: 165,
        },
        {
          x: new Date("2023-9-18").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-9-20").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-9-21").getTime(),
          y: 164,
        },
        {
          x: new Date("2023-9-22").getTime(),
          y: 160,
        },
        {
          x: new Date("2023-9-23").getTime(),
          y: 165,
        },
        {
          x: new Date("2023-9-24").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-9-25").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-9-26").getTime(),
          y: 177,
        },
        {
          x: new Date("2023-9-27").getTime(),
          y: 173,
        },
        {
          x: new Date("2023-9-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-9-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-9-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-10-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2023-10-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2023-10-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-10-05").getTime(),
          y: 142,
        },
        {
          x: new Date("2023-10-06").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-10-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2023-10-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2023-10-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-10-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-10-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2023-10-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2023-10-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2023-10-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-10-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-10-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2023-10-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2023-10-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2023-10-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2023-10-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-10-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-10-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-10-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2023-10-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2023-10-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-10-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-10-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-10-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-11-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2023-11-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2023-11-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-11-05").getTime(),
          y: 142,
        },
        {
          x: new Date("2023-11-06").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-11-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2023-11-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2023-11-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-11-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-11-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2023-11-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2023-11-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2023-11-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-11-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-11-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2023-11-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2023-11-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2023-11-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2023-11-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-11-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-11-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-11-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2023-11-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2023-11-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-11-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-11-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-11-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-12-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2023-12-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2023-12-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-12-04").getTime(),
          y: 142,
        },
        {
          x: new Date("2023-12-05").getTime(),
          y: 147,
        },
        {
          x: new Date("2023-12-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2023-12-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2023-12-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-12-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2023-12-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2023-12-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2023-12-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2023-12-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-12-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-12-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2023-12-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2023-12-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2023-12-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2023-12-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-12-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-12-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2023-12-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2023-12-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2023-12-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2023-12-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2023-12-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2023-12-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-2-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-2-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2024-2-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-2-04").getTime(),
          y: 142,
        },
        {
          x: new Date("2024-2-05").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-2-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-2-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-2-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-2-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-2-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-2-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-2-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2024-2-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-2-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-2-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-2-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2024-2-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2024-2-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-2-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-2-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-2-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-2-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-2-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2024-2-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-2-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-2-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-2-30").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-3-01").getTime(),
          y: 158,
        },
        {
          x: new Date("2024-3-02").getTime(),
          y: 152,
        },
        {
          x: new Date("2024-3-03").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-3-04").getTime(),
          y: 142,
        },
        {
          x: new Date("2024-3-05").getTime(),
          y: 147,
        },
        {
          x: new Date("2024-3-07").getTime(),
          y: 151,
        },
        {
          x: new Date("2024-3-08").getTime(),
          y: 155,
        },
        {
          x: new Date("2024-3-09").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-3-11").getTime(),
          y: 162,
        },
        {
          x: new Date("2024-3-12").getTime(),
          y: 157,
        },
        {
          x: new Date("2024-3-13").getTime(),
          y: 161,
        },
        {
          x: new Date("2024-3-14").getTime(),
          y: 166,
        },
        {
          x: new Date("2024-3-15").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-3-16").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-3-17").getTime(),
          y: 177,
        },
        {
          x: new Date("2024-3-18").getTime(),
          y: 181,
        },
        {
          x: new Date("2024-3-20").getTime(),
          y: 178,
        },
        {
          x: new Date("2024-3-21").getTime(),
          y: 173,
        },
        {
          x: new Date("2024-3-22").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-3-23").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-3-24").getTime(),
          y: 159,
        },
        {
          x: new Date("2024-3-25").getTime(),
          y: 164,
        },
        {
          x: new Date("2024-3-26").getTime(),
          y: 168,
        },
        {
          x: new Date("2024-3-27").getTime(),
          y: 172,
        },
        {
          x: new Date("2024-3-28").getTime(),
          y: 169,
        },
        {
          x: new Date("2024-3-29").getTime(),
          y: 163,
        },
        {
          x: new Date("2024-3-30").getTime(),
          y: 162,
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    colors: getChartColorsArray('["--vz-success"]'),
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Subscribers Growth",
      align: "left",
      style: {
        fontWeight: 500,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      showAlways: true,
      labels: {
        show: true,
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: "Subscribers",
        style: {
          fontWeight: 500,
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  },
};

// var lastDate1;
var data1 = [];
var TICKINTERVAL = 86400000;

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data1.push({
      x: x,
      y: y,
    });
    // lastDate1 = baseval;
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
  min: 10,
  max: 90,
});

export { zoomableChart };
