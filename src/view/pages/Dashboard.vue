<template>
  <div>
    <div class="row">
      <div class="col-xxl-4">
        <CardModal></CardModal>
      </div>
      <div class="col-xxl-4">
        <CardModal></CardModal>
      </div>
      <div class="col-xxl-4">
        <CardModal></CardModal>
      </div>
      <div class="col-xxl-12">
        <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
          <template v-slot:title v-if="hasTitleSlot">
            <h3 class="card-title">
              <slot name="title"></slot>
            </h3>
          </template>

          <template v-slot:body>
            <!--begin::Code example-->

            <h4>
              Informasi Umum
              <i class="fas fa-info-circle text-warning icon-lg ml-1"></i>
            </h4>

            <div role="group" class="mt-12">
              <div class="row">
                <div class="col-xxl-12">
                  <TableInfoUmum></TableInfoUmum>
                </div>
              </div>
            </div>

            <!--end::Code example-->

            <slot name="preview"></slot>
          </template>
        </KTCard>
      </div>
    </div>
  </div>
</template>

<script>
import KTCard from "@/view/content/Card.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import TableInfoUmum from "@/view/content/widgets/kemahasiswaan/TableInfoUmum.vue";
import CardModal from "@/view/content/widgets/kemahasiswaan/CardModal.vue";

export default {
  name: "tak",
  components: {
    TableInfoUmum,
    CardModal,
    KTCard,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "TAK" }]);
  },
};
</script>
