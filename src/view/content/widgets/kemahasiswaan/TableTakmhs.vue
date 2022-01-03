<template>
  <v-data-table
    :headers="headers"
    :items="mahasiswa"
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
              placeholder="Cari Nama Mahasiswa"
            >
            </b-form-input>
          </div>
        </template>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
              <v-spacer></v-spacer>
              <v-btn text @click="close">
                <v-icon small color="blue darken-1">
                  mdi-close
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nama"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nim"
                      label="NIM"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="listjk"
                      :items="listjk"
                      dense
                      filled
                      label="Jenis Kelamin"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.agama"
                      label="Agama"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.sks"
                      label="SKS"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.tgl_lahir"
                      label="Tanggal Lahir"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.prodi"
                      label="Program Studi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.status"
                      label="Status"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.transfer"
                      label="Transfer"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.angkatan"
                      label="Angkatan"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <router-link to="/detailaktas" v-slot="{ navigate }" custom>
        <v-icon color="blue" size="18" class="mr-2" @click="navigate(item)">
          mdi-eye
        </v-icon>
      </router-link>
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
    listjk: ["L", "P"],
    dialog: false,
    search: "",
    headers: [
      { text: "No", value: "no" },
      { text: "NIM", value: "nim" },
      { text: "Prodi", value: "prodi" },
      { text: "Nama", value: "name" },
      { text: "Poin TAK", value: "tak" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    mahasiswa: [],
    editedIndex: -1,
    editedItem: {
      no: null,
      name: "",
      nim: "",
      prodi: "",
      tak: null
    },
    defaultItem: {
      no: null,
      name: "",
      nim: "",
      prodi: "",
      tak: null
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.mahasiswa = [
        {
          no: 1,
          name: "I Putu Bagus Aryahstiax",
          nim: "1820129103",
          prodi: "IF",
          tak: 122
        },
        {
          no: 1,
          name: "I Putu Bagus Aryahstiax",
          nim: "1820129103",
          prodi: "IF",
          tak: 122
        },
        {
          no: 1,
          name: "I Putu Bagus Aryahstiax",
          nim: "1820129103",
          prodi: "IF",
          tak: 122
        },
        {
          no: 1,
          name: "I Putu Bagus Aryahstiax",
          nim: "1820129103",
          prodi: "IF",
          tak: 122
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.mahasiswa.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.mahasiswa[this.editedIndex], this.editedItem);
      } else {
        this.mahasiswa.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
