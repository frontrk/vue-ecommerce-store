<template>
  <b-container>
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <CustomDropdown
          :categoryData="category"
          :isLast="index === categories.length - 1"
          v-for="(category, index) in categories"
          :key="category.id"
        />
        <!-- <a class="p-2 text-muted" href="#">Shoes</a>
        <a class="p-2 text-muted" href="#">Watches</a>
        <a class="p-2 text-muted" href="#">Accessories</a>
        <a class="p-2 text-muted" href="#">Jewelry</a>
        <a class="p-2 text-muted" href="#">Handbags</a> -->
      </nav>
    </div>
  </b-container>
</template>

<script>
import CustomDropdown from "@/components/CustomDropdown";
export default {
  name: "CategoryMenu",
  components: { CustomDropdown },
  data() {
    return {
      categories: [
        { name: "Clothing", id: 1, items: ["T-shirts", "Jackets", "Dresses"] },
        {
          name: "Shoes",
          id: 2,
          items: ["Leather shoes", "Boat shoes", "Flip flops"]
        },
        {
          name: "Watches",
          id: 3,
          items: ["Quartz watches", "Mechanical Watches", "Sport watches"]
        },
        { name: "Jewelry", id: 4, items: ["Rings", "Necklaces", "Earrings"] },
        {
          name: "Bags",
          id: 5,
          items: ["Backpacks", "Wallets", "Shoulder Bags"]
        }
      ]
    };
  },
  methods: {}
};
</script>
