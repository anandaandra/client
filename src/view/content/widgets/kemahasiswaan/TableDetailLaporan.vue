<template>
  <v-data-table
    :headers="headers"
    :items="detailkegiatan"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialogDelete: false,
    search: "",
    headers: [
      { text: "Koke Mk", value: "no" },
      { text: "Matakuliah", value: "kegiatan" },
      { text: "Total Poin:", value: "poin" },
    ],
    detailkegiatan: [],
    editedIndex: -1,
    editedItem: {
      no: "",
      kegiatan: "",
      poin: null,
    },
    defaultItem: {
      no: "",
      kegiatan: "",
      poin: null,
    },
  }),

  computed: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.detailkegiatan = [
        {
          no: "1",
          kegiatan: "Sertifikasi MOS",
          poin: 20,
        },
        {
          no: "1",
          kegiatan: "Sertifikasi MOS",
          poin: 20,
        },
        {
          no: "1",
          kegiatan: "Sertifikasi MOS",
          poin: 20,
        },
        {
          no: "1",
          kegiatan: "Sertifikasi MOS",
          poin: 20,
        },
      ];
    },
  },
};
</script>
