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
        <i class="fas fa-info-circle text-warning icon-lg mr-2"></i>
        Grafik TAK Persemester
      </h4>

      <div role="group" class="mt-12">
        <div class="row">
          <div class="col-xxl-12">
            <KTCardNilai></KTCardNilai>
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
import KTCardNilai from "@/view/content/widgets/kemahasiswaan/comp/TAKSMT.vue";

export default {
  props: {
    title: String
  },
  components: {
    KTCard,
    KTCardNilai
  },
  computed: {},
  data() {
    return {};
  }
};
</script>
