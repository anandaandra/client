<template>
  <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
    <!-- <template v-slot:title v-if="true">
      <h3 class="card-title">
        <slot name="title">asd</slot>
      </h3>
    </template> -->

    <template v-slot:body>
      <!--begin::Code example-->

      <div role="group" class="mt-5">
        <div class="row">
          <div class="col-xxl-12">
            <TableManageMahasiswa></TableManageMahasiswa>
          </div>
        </div>
      </div>

      <!--end::Code example-->

      <slot name="preview"></slot>
    </template>
  </KTCard>
</template>
<script>
import KTCard from "@/view/content/Card.vue";
import TableManageMahasiswa from "@/view/content/widgets/kemahasiswaan/TableManageMahasiswa.vue";

export default {
  props: {
    title: String
  },
  components: {
    KTCard,
    TableManageMahasiswa
  }
};
</script>
