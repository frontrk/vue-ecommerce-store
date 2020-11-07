<template>
  <b-container>
    <b-row class="mt-4" align-h="center">
      <b-col cols="4">
        <h2 class="mb-4">Login</h2>
        <LoginForm :type="$route.name" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "Login",
  components: { LoginForm }
};
</script>
