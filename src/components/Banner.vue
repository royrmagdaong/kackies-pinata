<template>
  <div>
      <v-img :src="images.pj1" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">
        <v-btn 
            style="position: absolute; left: 6%; top: 5%; font-weight: 700; font-size: 16px;"
            elevation="0"
            color="#9ab3ab"
            class="white--text py-5"
        >
            Image 1
        </v-btn>
      </v-img>
      <v-img :src="images.pj2" aspect-ratio="0.8" style="width:100vw;" class="d-flex align-content-end">
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
</style>