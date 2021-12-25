<template>
  <v-data-table
    :headers="headers"
    :items="informasiumum"
    :search="search"
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
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      { text: "Tahun Kurikulum", value: "no" },
      { text: "Nama Kegiatan", value: "kegiatan" },
      { text: "Total Poin", value: "poin" },
    ],
    informasiumum: [],
    editedIndex: -1,
    editedItem: {
      no: "",
      kegiatan: "",
      poin: "",
    },
    defaultItem: {
      no: "",
      kegiatan: "",
      poin: "",
    },
  }),

  computed: {},

  watch: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.informasiumum = [
        {
          no: "2017",
          kegiatan: "Kurikulum 2017",
          poin: "15",
        },
        {
          no: "2017",
          kegiatan: "Kurikulum 2017",
          poin: "15",
        },
        {
          no: "2017",
          kegiatan: "Kurikulum 2017",
          poin: "15",
        },
        {
          no: "2017",
          kegiatan: "Kurikulum 2017",
          poin: "15",
        },
        {
          no: "2017",
          kegiatan: "Kurikulum 2017",
          poin: "15",
        },
      ];
    },
  },
};
</script>
