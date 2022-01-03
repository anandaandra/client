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

    <div class="col-md-12" data-app>
      <TableTakmhs></TableTakmhs>
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
        { text: "Sistem Informasi Akuntansi", value: "sia" }
      ],
      angkatan: [
        { text: "2014", value: "2014" },
        { text: "2015", value: "2015" },
        { text: "2016", value: "2016" },
        { text: "2017", value: "2017" },
        { text: "2018", value: "2018" },
        { text: "2019", value: "2019" },
        { text: "2020", value: "2020" },
        { text: "2021", value: "2021" }
      ],
      tahun: [
        { text: "2014", value: "2014" },
        { text: "2015", value: "2015" },
        { text: "2016", value: "2016" },
        { text: "2017", value: "2017" },
        { text: "2018", value: "2018" },
        { text: "2019", value: "2019" },
        { text: "2020", value: "2020" },
        { text: "2021", value: "2021" }
      ]
    };
  },
  components: {
    TableTakmhs
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Mahasiswa", route: "/daftarmhs" },
      { title: "Daftar Mahasiswa", route: "/daftarmhs" }
    ]);
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  }
};
</script>
