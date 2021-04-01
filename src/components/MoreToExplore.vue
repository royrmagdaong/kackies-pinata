<template>
  <v-container>
      <v-row>
        <v-col cols="12">
            <div class="more-to-explore pt-10 pb-14">MORE TO EXPLORE</div>
        </v-col>
        <v-col cols="12" sm="4" class="px-8">
            <v-img :src="images.pj6" aspect-ratio="1" class="d-flex align-start">
            </v-img>
            <div class="img-title">Last Call</div>
            <div class="img-content">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</div>
        </v-col>
        <v-col cols="12" sm="4" class="px-8">
            <v-img :src="images.sharks" aspect-ratio="1" class="d-flex align-start">
            </v-img>
            <div class="img-title">Swim Shop</div>
            <div class="img-content">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</div>
        </v-col>
        <v-col cols="12" sm="4" class="px-8 pb-12">
            <v-img :src="images.bunny" aspect-ratio="1" class="d-flex align-start">
            </v-img>
            <div class="img-title">Discounted</div>
            <div class="img-content">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import pj3 from '../assets/pj3.jpg'
import pj6 from '../assets/pj6.jpg'
import sharks from '../assets/sharks.jpg'
import bunny from '../assets/bunny.jpg'

export default {
    data:() => ({
        images: {
            pj3,
            pj6,
            bunny,
            sharks
        }
    })
}
</script>

<style scoped>
.more-to-explore{
    font-size: 22px;
    letter-spacing: 1.5px;
    color: #111111;
    font-weight: 300;
    text-align: center;
}
.img-title{
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    color: #111111;
    font-weight: 300;
    margin-top: 12px;
    margin-bottom: 6px;
}
.img-content{
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    font-weight: 400;
    font-style: italic;
}
</style>