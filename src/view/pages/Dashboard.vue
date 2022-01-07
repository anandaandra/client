<template>
  <div class="row h-100 justify-content-center align-items-center">
    <div class="col text-center">
      <img src="/media/logos/bigprimakara.png" class="max-h-80px" alt="" />
      <h3
        class="font-weight-bolder text-center font-size-h4 font-size-h1-lg mt-7"
      >
        TAK Management System
      </h3>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "tak",
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "TAK" }]);
  }
};
</script>
