<template>
  <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
    <template v-slot:title v-if="hasTitleSlot">
      <h3 class="card-title">
        <slot name="title"></slot>
      </h3>
    </template>

    <template v-slot:body>
      <!--begin::Code example-->

      <div role="group" class="mt-5">
        <div class="row">
          <div class="col-xxl-12">
            <TableManageUser></TableManageUser>
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
import TableManageUser from "@/view/content/widgets/kemahasiswaan/TableManageUser.vue";

export default {
  props: {
    title: String,
  },
  components: {
    KTCard,
    TableManageUser,
  },
};
</script>
