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
    <div class="col-md-2">
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="primary"
            >Jusursan</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">S1 Teknik Informatika</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">S1 Sisitem Informasi</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">S1 Sistem Informasi Akuntansi</b-link>
          </div>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="primary"
            >Angkatan</b-button
          >
        </b-card-header>
        <b-collapse
          style="text-align: center;"
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-button class="m-1" variant="primary">2014</b-button>
          <b-button class="m-1" variant="primary">2015</b-button>
          <b-button class="m-1" variant="primary">2016</b-button>
          <b-button class="m-1" variant="primary">2017</b-button>
          <b-button class="m-1" variant="primary">2018</b-button>
          <b-button class="m-1" variant="primary">2019</b-button>
          <b-button class="m-1" variant="primary">2020</b-button>
          <b-button class="m-1" variant="primary">2021</b-button>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="primary"
            >Status Mahasiswa</b-button
          >
        </b-card-header>
        <b-collapse
          style="text-align: center;"
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Aktif</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Lulus</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Mutasi</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Dikeluarkan</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Mengundurkan Diri</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Putus Sekolah</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Wafat</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Hilang</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Lainnya</b-link>
          </div>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="primary"
            >Jenis Kelamin</b-button
          >
        </b-card-header>
        <b-collapse
          style="text-align: center;"
          id="accordion-4"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-button class="m-1" variant="primary">Laki - Laki</b-button>
          <b-button class="m-1" variant="primary">Perempuan</b-button>
        </b-collapse>
      </b-card>
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="primary"
            >Agama</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Islam</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Budha</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Hindu</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Kristen</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Katholik</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Konghucu</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Tidak Diisi</b-link>
          </div>
          <div class="p-1" style="text-align:center;">
            <b-link class="mb-1">Lainnya</b-link>
          </div>
        </b-collapse>
      </b-card>
    </div>

    <div class="col-md-10" data-app></div>
  </div>
</template>

<script>
// import KTCodePreview from "@/view/content/CodePreview.vue";
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      tak: [
        {
          no: "1",
          kegiatan: "Frozen Yogurt",
          poin: 159,
        },
        {
          no: "2",
          kegiatan: "Ice cream sandwich",
          poin: 237,
        },
        {
          no: "3",
          kegiatan: "Eclair",
          poin: 262,
        },
        {
          no: "4",
          kegiatan: "Cupcake",
          poin: 305,
        },
        {
          no: "5",
          kegiatan: "Gingerbread",
          poin: 356,
        },
        {
          no: "6",
          kegiatan: "Jelly bean",
          poin: 375,
        },
        {
          no: "5",
          kegiatan: "Lollipop",
          poin: 392,
        },
        {
          no: "6",
          kegiatan: "Honeycomb",
          poin: 408,
        },
        {
          no: "7",
          kegiatan: "Donut",
          poin: 452,
        },
        {
          no: "8",
          kegiatan: "KitKat",
          poin: 518,
        },
      ],
    };
  },
  components: {},
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
