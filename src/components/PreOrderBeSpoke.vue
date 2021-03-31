<template>
  <div>
      <v-img :src="images.pj3" aspect-ratio="0.8" style="width:100vw; border-top: 1px solid #efefef;" class="d-flex align-start">
        <div style="position: absolute; left: 6%; bottom: 5%;">
            <div class="white--text mb-4 pre-order">
                Our made-to-order whimsical pieces are back for your any celebrations.
            </div>
            <v-btn 
                style="font-weight: 700; font-size: 16px;"
                elevation="0"
                color="#9ab3ab"
                class="white--text py-5"
            >
                pre-order bespoke
            </v-btn>
        </div>
      </v-img>
  </div>
</template>

<script>
import pj3 from '../assets/pj3.jpg'

export default {
    data:() => ({
        images: {
            pj3
        }
    })
}
</script>

<style scoped>
.pre-order{
    letter-spacing: 1px;
    font-size: 13px;
}
</style>