<template>
  <b-container fluid class="border-bottom bg-nav">
    <b-container>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/">
          <b-img
            :src="require('@/assets/logo.svg')"
            width="60"
            class="mb-3"
            alt="logo"
          ></b-img>
          Vue ecommerce store
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-input-group size="sm" class="mr-sm-4" style="width:400px;">
                <b-form-input
                  type="search"
                  placeholder="Search..."
                ></b-form-input>
                <b-input-group-append is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-append>
              </b-input-group>
              <b-button
                size="sm"
                variant="danger"
                class="mx-2 my-sm-0"
                type="submit"
              >
                <b-icon icon="cart3" aria-hidden="true"></b-icon> Cart
              </b-button>
              <b-dropdown size="sm" variant="outline-info" class="my-sm-0">
                <template #button-content>
                  <b-icon icon="person" aria-hidden="true"></b-icon>
                  Account
                </template>
                <b-dropdown-item
                  v-if="!$store.getters.isAuthenticated"
                  to="/login"
                  >Login</b-dropdown-item
                >
                <b-dropdown-item v-if="!$store.getters.isAuthenticated" href="#"
                  >Sign in</b-dropdown-item
                >

                <b-dropdown-item
                  @click="logout"
                  v-if="$store.getters.isAuthenticated"
                  >Log out</b-dropdown-item
                >
              </b-dropdown>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped style="scss">
nav {
  height: 80px;
}
.bg-nav {
  box-shadow: 0 4px 20px 1px rgba(109, 101, 122, 0.1);
}
</style>
