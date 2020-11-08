<template>
  <div id="app">
    <b-container fluid class="p-0 m-0">
      <Navbar />
      <CategoryMenu />
      <router-view />
      <b-container>
        <footer class="blog-footer">
          <p>
            2020
            <a href="https://radekkolis.com">radek kolis</a>.
          </p>
        </footer>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import CategoryMenu from "@/components/CategoryMenu";
export default {
  components: { Navbar, CategoryMenu }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;1,300&display=swap");
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}
.border {
  border: 1px solid #e5e5e5;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
</style>
