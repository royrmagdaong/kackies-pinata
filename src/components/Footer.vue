<template>
  <div class="footer">
      <v-row no-gutters>
          <v-col cols="12" class="px-8">
                <div class="grey--text text--darken-1 py-4">Follow</div>
                <v-btn icon class="mr-3">
                    <v-icon outline class="grey--text text--darken-1" style="font-size: 44px;">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon outline class="grey--text text--darken-1" style="font-size: 44px;">mdi-instagram</v-icon>
                </v-btn>
                <div class="grey--text text--darken-1 pb-2 py-4" style="font-size: 20px;">Search</div>
                <div class="grey--text text--darken-1 py-2" style="font-size: 20px;">Shop</div>
                <div class="grey--text text--darken-1 py-2" style="font-size: 20px;">Store Locations</div>
                <div class="grey--text text--darken-1 py-2" style="font-size: 20px;">About Us</div>
                <div class="grey--text text--darken-1 py-2" style="font-size: 20px;">Contact</div>
                <div class="grey--text text--darken-1 pt-2 pb-5" style="font-size: 14px;">Sign up to get the latest on sales, new releases and more...</div>
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
                <div class="grey--text text--darken-1 pt-4" style="font-size: 14px;">© 2021 Kackie's Pinata. All images and content are copyright protected.</div>
                <div class="grey--text text--darken-1 pt-1" style="font-size: 14px;">Powered by RoyalDigitalMinds</div>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    padding-top: 16px;
    padding-bottom: 36px;
    background-color: #c8d1ce;
}
</style>