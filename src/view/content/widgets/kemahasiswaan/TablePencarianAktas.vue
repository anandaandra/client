<template>
  <v-data-table
    :headers="headers"
    :items="kelasbuka"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <template>
          <div class="example-tools justify-content-center">
            <b-form-input
              id="filter-input"
              v-model="search"
              type="search"
              placeholder="Nama Kegiatan"
            >
            </b-form-input>
          </div>
        </template>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

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
    tanggal: false,
    search: "",
    headers: [
      { text: "No", value: "no" },
      { text: "NIM", value: "nim" },
      { text: "Name", value: "name" },
      { text: "Nama Kegiatan", value: "kegiatan" },
      { text: "Prodi", value: "prodi" },
    ],
    kelasbuka: [],
    defaultItem: {
      no: "",
      nim: "",
      name: "",
      kegiatan: "",
      prodi: "",
      tgl: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.kelasbuka = [
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020",
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020",
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020",
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020",
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020",
        },
      ];
    },
  },
};
</script>
