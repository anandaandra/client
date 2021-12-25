<template>
  <v-data-table
    :headers="headers"
    :items="kelasbuka"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Manage User</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="350px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
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
                    <v-text-field
                      v-model="editedItem.nama"
                      label="Nama"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.username"
                      label="Username"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.password"
                      disabled
                      label="Password"
                    ></v-text-field>
                  </v-col>
                  <v-switch
                    v-model="status"
                    :label="`Status: ${status.toString()}`"
                  ></v-switch>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="save">
                Simpan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.status`]="{ item }">
      <v-chip :color="getColor(item.status)" small dark>{{
        item.status
      }}</v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon color="amber" size="18" class="mr-2" @click="editItem(item)">
        mdi-pencil
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
    status: true,
    search: "",
    headers: [
      { text: "No", value: "no" },
      { text: "Nama", value: "nama" },
      { text: "Username", value: "username" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    kelasbuka: [],
    editedIndex: -1,
    editedItem: {
      no: "",
      nama: "",
      username: "",
      password: "",
      status: false,
    },
    defaultItem: {
      no: "",
      nama: "",
      username: "",
      password: "",
      status: false,
    },
  }),

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
    getColor(status) {
      if (status == "aktif") return "green";
      else return "red";
    },
    initialize() {
      this.kelasbuka = [
        {
          no: "1",
          nama: "Devi",
          username: "devi",
          status: "aktif",
        },
        {
          no: "2",
          nama: "	evi",
          username: "devi",
          status: "aktif",
        },
        {
          no: "4",
          nama: "	evi",
          username: "devi",
          status: "aktif",
        },
        {
          no: "3",
          nama: "	evi",
          username: "devi",
          status: "aktif",
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
