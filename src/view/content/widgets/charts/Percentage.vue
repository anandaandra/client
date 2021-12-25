<template>
  <!--begin::Stats Widget 11-->
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Radial Chart</h3>
    </div>
    <div class="card-body pb-2">
      <!--begin::Chart-->
      <apexchart
        type="radialBar"
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
      series: [67],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: "22px",
                color: undefined,
                formatter: function(val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          }
        },
        stroke: {
          dashArray: 2
        },
        labels: ["Median Ratio"]
      }
    };
  }
};
</script>
