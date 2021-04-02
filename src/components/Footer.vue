<template>
  <div class="footer">
      <v-container class="">
          <v-row no-gutters>
            <v-col cols="12" sm="6" class="pb-2 px-2">
                    <div class="grey--text text--darken-1 pb-4 py-2">Follow</div>
                    <v-btn icon class="mr-6">
                        <v-icon outline class="grey--text text--darken-1" style="font-size: 44px;">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon outline class="grey--text text--darken-1" style="font-size: 44px;">mdi-instagram</v-icon>
                    </v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="px-2">
                    <div class="d-md-flex">
                        <div class="grey--text text--darken-1 py-2 pr-md-4" style="font-size: 16px;">Search</div>
                        <div class="grey--text text--darken-1 py-2 pr-md-4" style="font-size: 16px;">Shop</div>
                        <div class="grey--text text--darken-1 py-2 pr-md-4" style="font-size: 16px;">Store Locations</div>
                        <div class="grey--text text--darken-1 py-2 pr-md-4" style="font-size: 16px;">About Us</div>
                        <div class="grey--text text--darken-1 py-2 pr-md-4" style="font-size: 16px;">Contact</div>
                    </div>
                    <div class="grey--text text--darken-1 pt-4 pb-5" style="font-size: 14px;">Sign up to get the latest on sales, new releases and more...</div>
                    <!-- xs and sm only -->
                    <div class="d-flex flex-column d-md-none">
                        <v-text-field
                            hide-details
                            dense
                            outlined
                            class="rounded-0 white"
                            placeholder="Email Address"
                        ></v-text-field>
                        <v-btn
                            block
                            tile
                            elevation="0"
                            color="#9BB4AC"
                            class="mt-5 white--text py-5"
                            style="font-weight: 700; font-size: 18px;"
                        >Sign Up</v-btn>
                    </div>
                    <!-- md and above -->
                    <div class="d-none d-md-flex">
                        <v-text-field
                            style="max-width: 400px;"
                            hide-details
                            dense
                            outlined
                            class="rounded-0 white mr-2"
                            placeholder="Email Address"
                        ></v-text-field>
                        <v-btn
                            tile
                            elevation="0"
                            color="#9BB4AC"
                            class="white--text py-5"
                            style="font-weight: 700; font-size: 18px;"
                        >Sign Up</v-btn>
                    </div>
                    <div class="grey--text text--darken-1 pt-4" style="font-size: 14px;">© 2021 Kackie's Pinata. All images and content are copyright protected.</div>
                    <div class="grey--text text--darken-1 pt-1" style="font-size: 14px;">Created by Roy Magdaong @github.com/royrmagdaong</div>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    padding-top: 24px;
    padding-bottom: 36px;
    background-color: #c8d1ce;
}
</style>