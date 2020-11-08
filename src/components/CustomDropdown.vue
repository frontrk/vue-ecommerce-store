<template>
  <div class="dropdown pt-2">
    <a class="text-muted" href="#">{{ categoryData.name }}</a>
    <div class="dropdown-content border" :class="{ 'last-category': isLast }">
      <div class="p-2">
        <a href="#" v-for="item in categoryData.items" :key="item">{{
          item
        }}</a>
      </div>
      <div class="p-2">
        <b-img :src="require('@/assets/logo.svg')" width="200"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDropdown",
  props: {
    categoryData: {
      type: Object,
      default: null
    },
    isLast: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 10px;
  width: 200px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: flex;
}
.last-category {
  left: -350px;
}
</style>
