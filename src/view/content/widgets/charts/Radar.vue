<template>
  <!--begin::Stats Widget 11-->
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Polygon Chart</h3>
    </div>
    <div class="card-body pb-2">
      <!--begin::Chart-->
      <apexchart
        type="radar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Stats Widget 11-->
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Series 1",
          data: [20, 100, 40, 30, 50, 80, 33]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "radar"
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: "#e9e9e9",
              fill: {
                colors: ["#f8f8f8", "#fff"]
              }
            }
          }
        },
        title: {
          text: "Radar with Polygon Fill"
        },
        colors: ["#FF4560"],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColor: "#FF4560",
          strokeWidth: 2
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val;
            }
          }
        },
        xaxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            }
          }
        }
      }
    };
  }
};
</script>
