<template>
  <v-data-table
    :headers="headers"
    :items="kelasbuka"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
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
                <v-col cols="12">
                  <v-select
                    :items="bidang"
                    dense
                    filled
                    label="bidang"
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    :items="jenis"
                    dense
                    filled
                    label="Jenis Kegiatan"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="jabatan"
                    dense
                    filled
                    label="Jabatan"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="10">
                  <v-text-field
                    v-model="editedItem.file"
                    label="Nama Kegiatan"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                  <v-text-field
                    v-model="editedItem.tak"
                    disabled
                    label="TAK"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-menu
                    ref="tanggal"
                    v-model="tanggal"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Tanggal"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="tanggal = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.tanggal.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-row col-12>
                  <v-col sm="6">
                    <v-file-input
                      counter
                      multiple
                      label="Image"
                      show-size
                      truncate-length="15"
                    ></v-file-input>
                  </v-col>
                  <v-col sm="6">
                    <v-file-input
                      counter
                      multiple
                      label="File Attachment"
                      show-size
                      truncate-length="15"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="save">
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon color="amber" size="18" class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon color="red" size="18" class="mr-2" @click="editItem(item)">
        mdi-delete
      </v-icon>
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
    jenis: ["Dosen", "Dosen PA", "Mahasiswa"],
    jabatan: ["Dosen", "Dosen PA", "Mahasiswa"],
    bidang: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
    search: "",
    headers: [
      { text: "No", value: "no" },
      { text: "Nama File", value: "file" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    kelasbuka: [],
    editedIndex: -1,
    editedItem: {
      bidang: "",
      jenis: "",
      file: "",
      tak: "",
      tanggal: "",
    },
    defaultItem: {
      bidang: "",
      tanggal: "",
    },
  }),

  date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.kelasbuka = [
        {
          no: "1",
          file: "Sosialisasi MOS",
          status: null,
        },
        {
          no: "1",
          file: "Sosialisasi MOS",
          status: null,
        },
        {
          no: "1",
          file: "Sosialisasi MOS",
          status: null,
        },
        {
          no: "1",
          file: "Sosialisasi MOS",
          status: null,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.kelasbuka.indexOf(item);
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
        Object.assign(this.kelasbuka[this.editedIndex], this.editedItem);
      } else {
        this.kelasbuka.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
