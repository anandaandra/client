<template>
  <!--begin::Stats Widget 11-->
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Bar w Marker Chart</h3>
    </div>
    <div class="card-body pb-2">
      <!--begin::Chart-->
      <apexchart
        type="rangeBar"
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
        // George Washington
        {
          name: "George Washington",
          data: [
            {
              x: "President",
              y: [1, 5]
            }
          ]
        },
        // John Adams
        {
          name: "John Adams",
          data: [
            {
              x: "President",
              y: [5, 11]
            },
            {
              x: "Vice President",
              y: [1, 5]
            }
          ]
        },
        // Thomas Jefferson
        {
          name: "Thomas Jefferson",
          data: [
            {
              x: "President",
              y: [11, 15]
            },
            {
              x: "Vice President",
              y: [5, 11]
            },
            {
              x: "Secretary of State",
              y: [1, 5]
            }
          ]
        },
        // Aaron Burr
        {
          name: "Aaron Burr",
          data: [
            {
              x: "Vice President",
              y: [11, 15]
            }
          ]
        },
        // George Clinton
        {
          name: "George Clinton",
          data: [
            {
              x: "Vice President",
              y: [15, 21]
            }
          ]
        },
        // John Jay
        {
          name: "John Jay",
          data: [
            {
              x: "Secretary of State",
              y: [5, 11]
            }
          ]
        },
        // Edmund Randolph
        {
          name: "Edmund Randolph",
          data: [
            {
              x: "Secretary of State",
              y: [11, 15]
            }
          ]
        },
        // Timothy Pickering
        {
          name: "Timothy Pickering",
          data: [
            {
              x: "Secretary of State",
              y: [15, 21]
            }
          ]
        },
        // Charles Lee
        {
          name: "Charles Lee",
          data: [
            {
              x: "Secretary of State",
              y: [21, 25]
            }
          ]
        },
        // John Marshall
        {
          name: "John Marshall",
          data: [
            {
              x: "Secretary of State",
              y: [25, 31]
            }
          ]
        },
        // Levi Lincoln
        {
          name: "Levi Lincoln",
          data: [
            {
              x: "Secretary of State",
              y: [31, 35]
            }
          ]
        },
        // James Madison
        {
          name: "James Madison",
          data: [
            {
              x: "Secretary of State",
              y: [35, 41]
            }
          ]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "rangeBar"
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%",
            rangeBarGroupRows: true
          }
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#3F51B5",
          "#546E7A",
          "#D4526E",
          "#8D5B4C",
          "#F86624",
          "#D7263D",
          "#1B998B",
          "#2E294E",
          "#F46036",
          "#E2C044"
        ],
        fill: {
          type: "solid"
        },
        xaxis: {
          type: "number"
        },
        yaxis: {
          min: -10,
          max: 50
        },
        legend: {
          position: "right"
        }
      }
    };
  }
};
</script>
