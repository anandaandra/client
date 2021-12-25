<template>
  <div>
    <!--begin::Dashboard-->
    <div class="row">
      <div class="col-xxl-4">
        <Donut></Donut>
      </div>
      <div class="col-xxl-4">
        <Radar></Radar>
      </div>
      <div class="col-xxl-4 ">
        <Percentage></Percentage>
      </div>
      <div class="col-xxl-6">
        <Bar></Bar>
      </div>
      <div class="col-xxl-6">
        <Mark></Mark>
      </div>
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Percentage from "@/view/content/widgets/charts/Percentage.vue";
import Donut from "@/view/content/widgets/charts/Donut.vue";
import Radar from "@/view/content/widgets/charts/Radar.vue";
import Bar from "@/view/content/widgets/charts/Bar.vue";
import Mark from "@/view/content/widgets/charts/Mark.vue";

export default {
  name: "dashboard",
  components: {
    Percentage,
    Donut,
    Radar,
    Bar,
    Mark
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
