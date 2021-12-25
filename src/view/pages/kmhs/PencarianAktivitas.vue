<template>
  <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
    <template v-slot:title v-if="hasTitleSlot">
      <h3 class="card-title">
        <slot name="title"></slot>
      </h3>
    </template>

    <template v-slot:body>
      <!--begin::Code example-->

      <h4>
        Pencarian Aktivitas
        <i class="fas fa-info-circle text-warning icon-lg ml-1"></i>
      </h4>

      <div role="group" class="mt-12">
        <div class="row">
          <div class="col-xxl-12">
            <TablePencarianAktas></TablePencarianAktas>
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
import TablePencarianAktas from "@/view/content/widgets/kemahasiswaan/TablePencarianAktas.vue";

export default {
  props: {
    title: String,
  },
  components: {
    KTCard,
    TablePencarianAktas,
  },
};
</script>
