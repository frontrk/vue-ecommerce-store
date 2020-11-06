<template>
  <div>
    <b-container>
      <b-row class="hero mb-4" align-v="center">
        <b-col cols="6">
          <h1>Watches & Accesories</h1>
          <p>Discounts up to 40%"</p>
          <b-btn>Explore</b-btn>
        </b-col>
        <b-col cols="6">
          <b-img
            fluid
            :src="
              require('@/assets/white_daniel-korpai-2FGPidtk00E-unsplash.png')
            "
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="4">
          <b-card
            title="Card Title"
            tag="article"
            class="mb-2 box-shadow"
            style="height:300px;"
          >
            <b-card-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              vero quae odit magnam asperiores inventore dolorum, pariatur
              commodi deleniti voluptatibus in facere, corporis, fugiat est
              velit aperiam praesentium saepe omnis.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="8">
          <Carousel />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Home",
  components: { Carousel }
};
</script>
<style lang="scss" scoped>
.hero {
  height: 300px;
}
</style>
