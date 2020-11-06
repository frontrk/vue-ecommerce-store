<template>
  <agile
    :nav-buttons="false"
    :autoplay-speed="3000"
    :speed="2500"
    fade
    pause-on-hover
    pause-on-dots-hover
    autoplay
    :dots="false"
  >
    <div class="slide">
      <img
        class="my-image"
        :src="require('@/assets/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg')"
      />
    </div>
    <div class="slide">
      <img
        class="my-image"
        :src="require('@/assets/freestocks-VFrcRtEQKL8-unsplash.jpg')"
      />
    </div>
    <div class="slide">
      <img
        class="my-image"
        :src="
          require('@/assets/lumensoft-technologies-wxRvOFBbM8o-unsplash.jpg')
        "
      />
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile
  }
};
</script>

<style scoped lang="scss">
.my-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
