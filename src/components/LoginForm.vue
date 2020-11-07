<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="input-group-1" label="Email:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter Password"
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  name: "LoginForm",
  props: { type: { default: "login", required: true } },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.$store.dispatch("login", this.form);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
