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
          <b>Daftar Mahasiswa Hapus</b> - Menampilkan dan mengelola biodata
          mahasiswa yang sudah terhapus
        </div>
      </b-alert>
    </div>
    <div class="col-md-12" data-app></div>
    <div class="col-md-9">
      <b-alert show variant="info" class="alert-custom alert-shadow fade show">
        <div class="alert-icon">
          <i class="fas fa-info-circle icon-md"></i>
        </div>
        <div class="alert-text">
          <b>Keterangan</b> - Menampilkan data mahasiswa yang terhapus dan
          mengembalikan data <span class="mx-2">|</span> Tekan tombol (
          <i class="flaticon2 flaticon-refresh text-light icon-md"></i> ) untuk
          restore data
        </div>
      </b-alert>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Mahasiswa", route: "/daftarmhs" },
      { title: "Daftar Mahasiswa Hapus", route: "/daftarmhs" }
    ]);
  },
  computed: {
    ...mapGetters(["currentUserPhoto"])
  }
};
</script>
