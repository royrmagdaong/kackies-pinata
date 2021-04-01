<template>
  <div>
      <v-img :src="images.pj2" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">

        <div class="appbar-2 d-none d-sm-flex">
            <v-container class="d-flex justify-space-between px-4">
            <div class="d-flex align-center">
                <div class="brandname1 mr-6">Pinata Manila Ph</div>
                <div class="px-2">HOME</div>
                <div class="d-flex align-center px-2">
                SHOP
                <v-icon color="">mdi-chevron-down</v-icon>
                </div>
                <div class="px-2">LOYALTY CLUB</div>
            </div>
            <div class="d-flex align-center">
                <v-icon small class="pa-2">mdi-account</v-icon>
                <v-icon small class="pa-2">mdi-magnify</v-icon>
                <v-icon small class="pa-2">mdi-cart</v-icon>
                <span>0</span>
            </div>
            </v-container>
        </div>

        <v-btn 
            style="position: absolute; left: 6%; top: 5%; font-weight: 700; font-size: 16px;"
            elevation="0"
            color="#9ab3ab"
            class="white--text py-5"
        >
            Image 1
        </v-btn>
      </v-img>
      <v-img :src="images.pj1" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">
        <v-btn 
            style="position: absolute; left: 6%; top: 5%; font-weight: 700; font-size: 16px;"
            elevation="0"
            color="#9ab3ab"
            class="white--text py-5"
        >
            Image 2
        </v-btn>
      </v-img>
      <v-img :src="images.pj4" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">
        <v-btn 
            style="position: absolute; left: 6%; top: 5%; font-weight: 700; font-size: 16px;"
            elevation="0"
            color="#9ab3ab"
            class="white--text py-5"
        >
            Image 3
        </v-btn>
      </v-img>
      <v-img :src="images.pj5" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">
        <v-btn 
            style="position: absolute; left: 6%; top: 5%; font-weight: 700; font-size: 16px;"
            elevation="0"
            color="#9ab3ab"
            class="white--text py-5"
        >
            Image 4
        </v-btn>
      </v-img>
  </div>
</template>

<script>
import pj1 from '../assets/pj1.jpg'
import pj2 from '../assets/pj2.jpg'
import pj4 from '../assets/pj4.jpg'
import pj5 from '../assets/pj5.jpg'

export default {
    data: () => ({
        images:{
            pj1,
            pj2,
            pj4,
            pj5,
        }
    })
}
</script>

<style scoped>
.appbar-2{
  background: rgba(255, 255, 255, 0);
  position: absolute; 
  z-index: 14; 
  top:0;
  left: 0;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}
.brandname1{
  font-family: 'Parisienne', cursive;
  font-size: 32px;
  color: rgb(110, 66, 53);
}
</style>