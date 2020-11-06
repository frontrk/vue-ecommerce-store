<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">E-store</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group size="sm" class="mr-sm-4">
              <b-form-input
                type="search"
                placeholder="Search..."
              ></b-form-input>
              <b-input-group-append is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-append>
            </b-input-group>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              <b-icon icon="cart3" aria-hidden="true"></b-icon> Cart
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped style="scss">
nav {
  height: 80px;
}
</style>
