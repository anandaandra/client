<template>
  <div class="row">
    <div class="col-md-12">
      <b-alert
        show
        variant="light"
        class="alert-custom alert-white alert-shadow fade show"
      >
        <div class="alert-icon">
          <span class="svg-icon svg-icon-lg">
            <inline-svg src="media/svg/icons/Code/Info-circle.svg" />
          </span>
        </div>
        <div class="alert-text">
          <b>Daftar Mahasiswa</b> - Menampilkan dan mengelola data mahasiswa.
        </div>
      </b-alert>
    </div>

    <div class="col-md-10" data-app>
      <TableTakmhs></TableTakmhs>
    </div>

    <div class="col-md-2">
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="primary"
            >Jusursan</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <div class="mx-1" style="text-align:center;">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                id="select-prodi"
                v-model="selected"
                :options="jurusan"
                :aria-describedby="ariaDescribedby"
                name="radio-btn-stacked"
                buttons
                button-variant="primary"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="primary"
            >Tahun</b-button
          >
        </b-card-header>
        <b-collapse
          style="text-align: center;"
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="mx-1" style="text-align:center;">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                id="select-prodi"
                v-model="selected"
                :options="tahun"
                :aria-describedby="ariaDescribedby"
                name="radio-btn-stacked"
                buttons
                button-variant="primary"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="primary"
            >Angkatan</b-button
          >
        </b-card-header>
        <b-collapse
          style="text-align: center;"
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="mx-1" style="text-align:center;">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-radio-group
                id="select-prodi"
                v-model="selected"
                :options="angkatan"
                :aria-describedby="ariaDescribedby"
                name="radio-btn-stacked"
                buttons
                button-variant="primary"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </b-collapse>
      </b-card>

      <div class="row ml-1 mt-3">
        <v-btn rounded small color="blue" dark class="mb-2 mr-2">
          <i class="fas fa-search text-light icon-nm mr-2"></i>
          Filter
        </v-btn>
        <v-btn rounded small color="warning" dark class="mb-2 mr-2">
          <i class="fas fa-sync-alt text-light icon-nm mr-2"></i>
          Reset
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// import KTCodePreview from "@/view/content/CodePreview.vue";
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import TableTakmhs from "@/view/content/widgets/kemahasiswaan/TableTakmhs.vue";

export default {
  data() {
    return {
      jurusan: [
        { text: "Teknik Informatika", value: "if" },
        { text: "Sistem Informasi", value: "si" },
        { text: "Sistem Informasi Akuntansi", value: "sia" },
      ],
      angkatan: [
        { text: "2014", value: "2014" },
        { text: "2015", value: "2015" },
        { text: "2016", value: "2016" },
        { text: "2017", value: "2017" },
        { text: "2018", value: "2018" },
        { text: "2019", value: "2019" },
        { text: "2020", value: "2020" },
        { text: "2021", value: "2021" },
      ],
      tahun: [
        { text: "2014", value: "2014" },
        { text: "2015", value: "2015" },
        { text: "2016", value: "2016" },
        { text: "2017", value: "2017" },
        { text: "2018", value: "2018" },
        { text: "2019", value: "2019" },
        { text: "2020", value: "2020" },
        { text: "2021", value: "2021" },
      ],
    };
  },
  components: {
    TableTakmhs,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Mahasiswa", route: "/daftarmhs" },
      { title: "Daftar Mahasiswa", route: "/daftarmhs" },
    ]);
  },
  computed: {
    ...mapGetters(["currentUserPhoto"]),
  },
};
</script>
