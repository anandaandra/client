<template>
  <div>
    <div class="row">
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "tak",
  components: {
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "TAK" }]);
  },
};
</script>
