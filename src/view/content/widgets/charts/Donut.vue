<template>
  <!--begin::Stats Widget 11-->
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Donut Chart</h3>
    </div>
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart
        type="donut"
        width="380"
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
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: false,
                  show: false
                }
              }
            }
          }
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        states: {
          hover: {
            filter: "none"
          }
        },
        theme: {
          palette: "palette2"
        },
        title: {
          text: "Favourite Movie Type",
          align: "left",
          style: {
            fontSize: "18px"
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>
