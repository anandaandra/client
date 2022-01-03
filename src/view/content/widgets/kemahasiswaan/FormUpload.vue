<template>
  <form>
    <v-select
      v-model="select"
      :items="informasi"
      :error-messages="selectErrors"
      label="Pilih Informasi"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-textarea
      v-model="desc"
      :error-messages="nameErrors"
      label="Deskripsi"
      required
    ></v-textarea>
    <v-file-input
      v-model="files"
      :error-messages="nameErrors"
      show-size
      counter
      multiple
      label="Upload poster / dokumen (max: 5mb)"
      required
    ></v-file-input>

    <div style="text-align: right;" class="mt-5">
      <v-btn class="mr-4" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    desc: { required },
    name: { required, maxLength: maxLength(33) },
    email: { required, email },
    select: { required }
  },

  data: () => ({
    desc: "",
    name: "",
    email: "",
    select: null,
    informasi: ["Informasi Umum", "Informasi Lomba"]
  }),

  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
    }
  }
};
</script>
