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
        <v-dialog v-model="dialog" max-width="900px">
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
                <template>
                  <v-form v-model="valid">
                    <v-container>
                      <h4>
                        Detail Mahasiswa
                        <i
                          class="fas fa-info-circle text-warning icon-lg ml-1"
                        ></i>
                      </h4>
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            disabled
                            label="Nama"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            v-model="lastname"
                            :rules="nameRules"
                            disabled
                            label="NIM"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            disabled
                            label="Prodi"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <h4 class="mt-15">
                        Detail Validasi
                        <i
                          class="fas fa-info-circle text-warning icon-lg ml-1"
                        ></i>
                      </h4>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="firstname"
                            :rules="nameRules"
                            disabled
                            label="Bidang Kegiatan"
                            required
                          ></v-select>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-select
                            v-model="firstname"
                            :rules="nameRules"
                            disabled
                            label="Jenis Kegiatan"
                            required
                          ></v-select>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            v-model="lastname"
                            :rules="nameRules"
                            disabled
                            label="Nama Kegiatan"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="5">
                          <v-select
                            v-model="email"
                            :rules="emailRules"
                            disabled
                            label="Jabatan"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="5">
                          <v-menu
                            ref="menu"
                            disabled
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date"
                                label="Picker in menu"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false">
                                Cancel
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                              >
                                OK
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" md="2">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            disabled
                            label="TAK"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <template>
                            <div
                              class="d-flex flex-column justify-space-between align-center"
                            >
                              <v-img
                                :aspect-ratio="16 / 9"
                                :width="width"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                              ></v-img>
                              <v-slider
                                v-model="width"
                                class="align-self-stretch"
                                min="600"
                                max="800"
                                step="1"
                              ></v-slider>
                            </div>
                          </template>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            outlined
                            name="input-7-4"
                            label="Outlined textarea"
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                          ></v-textarea>
                          <v-chip class="m-2" link pill
                            >Nama sertifikat tidak sesuai, mohon diinputkan
                            dengan benar</v-chip
                          >
                          <v-chip class="m-2" link pill
                            >bidang kegiatan dianggap tidak sesuai, mohon
                            diinputkan dengan benar</v-chip
                          >
                          <v-chip class="m-2" link pill
                            >jabatan yang dipilih tidak sesuai dengan keterangan
                            pada sertifikat, mohon diinputkan dengan
                            benar</v-chip
                          >
                        </v-col>
                      </v-row>
                      <v-row> </v-row>
                    </v-container>
                  </v-form>
                </template>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="save">
                Valid
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Unvalid
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon color="blue" size="18" class="mr-2" @click="editItem(item)">
        mdi-eye
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
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    dialog: false,
    tanggal: false,
    width: 600,
    search: "",
    headers: [
      { text: "No", value: "no" },
      { text: "NIM", value: "nim" },
      { text: "Name", value: "name" },
      { text: "Nama Kegiatan", value: "kegiatan" },
      { text: "Prodi", value: "prodi" },
      { text: "Tanggal Input", value: "tgl" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    kelasbuka: [],
    editedIndex: -1,
    editedItem: {
      no: "",
      nim: "",
      name: "",
      kegiatan: "",
      prodi: "",
      tgl: ""
    },
    defaultItem: {
      no: "",
      nim: "",
      name: "",
      kegiatan: "",
      prodi: "",
      tgl: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Data Mahasiswa";
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
      this.kelasbuka = [
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020"
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020"
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020"
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020"
        },
        {
          no: "1",
          nim: "1601010014",
          name: "Ayunda Desri",
          kegiatan: "Lomba berenang se-Bali",
          prodi: "SI",
          tgl: "2 Mei 2020"
        }
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
    }
  }
};
</script>
