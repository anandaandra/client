<template>
  <div>
    <!--begin::Dashboard-->
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
      <div class="card-body">
        <!--begin::Details-->
        <div class="d-flex mb-9">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
            <!-- <div class="symbol symbol-50 symbol-lg-120">
              <img :src="currentUserPhoto" alt="image" />
            </div> -->

            <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
              <span class="font-size-h3 symbol-label font-weight-boldest"
                >JM</span
              >
            </div>
          </div>
          <!--end::Pic-->

          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1">
              <div class="d-flex mr-3">
                <a
                  href="#"
                  class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
                  >Jason Muller</a
                >
                <a href="#"
                  ><i class="flaticon2-correct text-success font-size-h5"></i
                ></a>
              </div>

              <!-- <div class="my-lg-0 my-3">
                <a
                  href="#"
                  class="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3"
                  >ask</a
                >
                <a
                  href="#"
                  class="btn btn-sm btn-info font-weight-bolder text-uppercase"
                  >hire</a
                >
              </div> -->
            </div>
            <!--end::Title-->

            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between mt-1">
              <div class="d-flex flex-column flex-grow-1 pr-8">
                <div class="d-flex flex-wrap mb-4">
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon2-new-email mr-2 font-size-lg"></i
                    >jason@siastudio.com</a
                  >
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                    ><i class="flaticon2-calendar-3 mr-2 font-size-lg"></i>PR
                    Manager
                  </a>
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold"
                    ><i class="flaticon2-placeholder mr-2 font-size-lg"></i
                    >Melbourne</a
                  >
                </div>

                <span class="font-weight-bold text-dark-50"
                  >I distinguish three main text objectives could be merely to
                  inform people.</span
                >
                <span class="font-weight-bold text-dark-50"
                  >A second could be persuade people.You want people to bay
                  objective</span
                >
              </div>

              <div
                class="d-flex align-items-center w-25 flex-fill float-right mt-lg-12 mt-8"
              >
                <span class="font-weight-bold text-dark-75">Progress</span>
                <div class="progress progress-xs mx-3 w-100">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 63%;"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span class="font-weight-bolder text-dark">78%</span>
              </div>
            </div>
            <!--end::Content-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->

        <div class="separator separator-solid"></div>

        <!--begin::Items-->
        <div class="d-flex justify-content-around flex-wrap mt-8">
          <!--begin::Item-->
          <!-- <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-piggy-bank display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">Earnings</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">$</span
                >249,500</span
              >
            </div>
          </div> -->
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-confetti display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">Nilai</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">IPS: </span
                >3.5</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-pie-chart display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">SKS</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">Total: </span
                >21</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-file-2 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >Grade</span
              >
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">Average: </span
                >B+</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <!-- <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-chat-1 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >648 Comments</span
              >
              <a href="#" class="text-primary font-weight-bolder">View</a>
            </div>
          </div> -->
          <!--end::Item-->

          <!--begin::Item-->
          <!-- <div class="d-flex align-items-center flex-lg-fill mb-2 float-left">
            <span class="mr-4">
              <i
                class="flaticon-network display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="symbol-group symbol-hover">
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Mark Stone"
              >
                <img alt="Pic" src="media/users/300_25.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Charlie Stone"
              >
                <img alt="Pic" src="media/users/300_19.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Luca Doncic"
              >
                <img alt="Pic" src="media/users/300_22.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Nick Mana"
              >
                <img alt="Pic" src="media/users/300_23.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Teresa Fox"
              >
                <img alt="Pic" src="media/users/300_18.jpg" />
              </div>
              <div class="symbol symbol-30 symbol-circle symbol-light">
                <span class="symbol-label font-weight-bold">5+</span>
              </div>
            </div>
          </div> -->
          <!--end::Item-->
        </div>
        <!--begin::Items-->
      </div>
    </div>
    <!--end::Card-->
    <template>
      <!-- <p>
              The data table exposes a <code>search</code> prop that allows you
              to filter your data.
            </p> -->
      <v-card>
        <v-card-title>
          Data Mahasiswa
          <v-spacer></v-spacer>
          <div class="my-lg-0 my-3">
            <a href="#" class="btn btn-sm btn-primary font-weight-bolder">
              <i class="fas fa-print icon-nm"></i>
              Cetak KHS</a
            >
          </div>
        </v-card-title>
        <v-data-table
          :headers="code4.headers"
          :items="code4.number"
          :search="code4.search"
        ></v-data-table>
      </v-card>
    </template>

    <!-- <KTCodePreview v-bind:title="'Basic usage'">
          <template v-slot:preview>
            <div>
              <b-table striped hover :items="code1.items"></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview> -->

    <!--end::Dashboard-->
  </div>
</template>

<script>
// import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "khs",
  data() {
    return {
      code1: {
        html: `<div>
    <b-table striped hover :items="items"></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        items: [
          { number: 40, kode: 'Dickerson', matakuliah: 'Macdonald', grade: 'A', sks: '2', nilai: '3.5' },
          { number: 21, kode: 'Larsen', matakuliah: 'Shaw', grade: 'A', sks: '2', nilai: '3.5' },
          { number: 89, kode: 'Geneva', matakuliah: 'Wilson', grade: 'A', sks: '2', nilai: '3.5' },
          { number: 38, kode: 'Jami', matakuliah: 'Carney', grade: 'A', sks: '2', nilai: '3.5' }
        ]
      }
    }
  }`,
        items: [
          {
            number: 40,
            kode: "Dickerson",
            matakuliah: "Macdonald",
            grade: "A",
            sks: "2",
            nilai: "3.5"
          },
          {
            number: 21,
            kode: "Larsen",
            matakuliah: "Shaw",
            grade: "A",
            sks: "2",
            nilai: "3.5"
          },
          {
            number: 89,
            kode: "Geneva",
            matakuliah: "Wilson",
            grade: "A",
            sks: "2",
            nilai: "3.5"
          },
          {
            number: 38,
            kode: "Jami",
            matakuliah: "Carney",
            grade: "A",
            sks: "2",
            nilai: "3.5"
          }
        ]
      },
      code4: {
        html: `<v-card>
  <v-card-title>
    Nutrition
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="number"
    :search="search"
  ></v-data-table>
</v-card>`,
        js: ` export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Number',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Kode', value: 'kode' },
        { text: 'Nama Matakuliah', value: 'matakuliah' },
        { text: 'Grade', value: 'grade' },
        { text: 'SKS', value: 'sks' },
        { text: 'Nilai', value: 'nilai' },
      ],
      number: [
        {
          name: '1',
          kode: 159,
          matakuliah: 6.0,
          grade: 24,
          sks: 4.0,
          nilai: '1%',
        },
        {
          name: '2',
          kode: 237,
          matakuliah: 9.0,
          grade: 37,
          sks: 4.3,
          nilai: '1%',
        },
        {
          name: '3',
          kode: 262,
          matakuliah: 16.0,
          grade: 23,
          sks: 6.0,
          nilai: '7%',
        },
        {
          name: '4',
          kode: 305,
          matakuliah: 3.7,
          grade: 67,
          sks: 4.3,
          nilai: '8%',
        },
        {
          name: '5',
          kode: 356,
          matakuliah: 16.0,
          grade: 49,
          sks: 3.9,
          nilai: '16%',
        },
        {
          name: '6',
          kode: 375,
          matakuliah: 0.0,
          grade: 94,
          sks: 0.0,
          nilai: '0%',
        },
        {
          name: '7',
          kode: 392,
          matakuliah: 0.2,
          grade: 98,
          sks: 0,
          nilai: '2%',
        }
      ],
    }
  },
}`,
        search: "",
        headers: [
          {
            text: "Number",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Kode", value: "kode" },
          { text: "Nama Matakuliah", value: "matakuliah" },
          { text: "Grade", value: "grade" },
          { text: "SKS", value: "sks" },
          { text: "Nilai", value: "nilai" }
        ],
        number: [
          {
            name: "1",
            kode: 159,
            matakuliah: 6.0,
            grade: 24,
            sks: 4.0,
            nilai: "1%"
          },
          {
            name: "2",
            kode: 237,
            matakuliah: 9.0,
            grade: 37,
            sks: 4.3,
            nilai: "1%"
          },
          {
            name: "3",
            kode: 262,
            matakuliah: 16.0,
            grade: 23,
            sks: 6.0,
            nilai: "7%"
          },
          {
            name: "4",
            kode: 305,
            matakuliah: 3.7,
            grade: 67,
            sks: 4.3,
            nilai: "8%"
          },
          {
            name: "5",
            kode: 356,
            matakuliah: 16.0,
            grade: 49,
            sks: 3.9,
            nilai: "16%"
          },
          {
            name: "6",
            kode: 375,
            matakuliah: 0.0,
            grade: 94,
            sks: 0.0,
            nilai: "0%"
          },
          {
            name: "7",
            kode: 392,
            matakuliah: 0.2,
            grade: 98,
            sks: 0,
            nilai: "2%"
          }
        ]
      }
    };
  },
  components: {
    // KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Kartu Hasil Studi" }]);
  }
};
</script>
