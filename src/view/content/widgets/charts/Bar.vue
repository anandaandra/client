<template>
  <!--begin::Stats Widget 11-->
  <div class="card card-custom gutter-b">
    <!--begin::Body-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title font-weight-bolder">Bar Chart</h3>
    </div>
    <div class="card-body pb-2">
      <!--begin::Chart-->
      <apexchart
        type="bar"
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
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany"
          ]
        }
      }
    };
  }
};
</script>
