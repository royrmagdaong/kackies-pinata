<template>
<div>
  <!-- navdrawer 1 -->
  <div class="nav-drawer" :class="{'nav-1-close': nav1, 'nav-1-open': !nav1}">
    <div class="d-flex justify-center nav-drawer-header">
      <div class="align-self-center">Pinata Manila Ph</div>
    </div>
    <div class="nav-drawer-body">
        <div class="search px-6 pb-2">
            <v-text-field
                outlined
                dense
                hide-details
                class="rounded-xl grey lighten-4"
                placeholder="Search"
            ></v-text-field>
        </div>
        <ul style="list-style-type: none;" class="navcontent-1">
            <li>HOME</li>
            <li class="d-flex justify-space-between align-center py-1 pr-2">
                <div>SHOP</div>
                <v-icon large color="#bbb" dense @click="toShop">mdi-chevron-right</v-icon>
            </li>
            <li>LOYALTY CLUB</li>
            <li>SIGN IN</li>
            <li>
                <div class="social-media">
                    <v-btn icon class="pr-8">
                        <v-icon outline style="font-size: 44px;">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon outline style="font-size: 44px;">mdi-instagram</v-icon>
                    </v-btn>
                </div>
            </li>
        </ul>
    </div>
  </div>

  <!-- navdrawer 2 -->
  <div class="nav-drawer-2" :class="{'nav-2-close': nav2, 'nav-2-open': !nav2, 'nav-1-close': nav3, 'nav-1-open': !nav3}">
    <div class="d-flex justify-center nav-drawer-header" style="position: relative;">
      <div class="align-self-center grey--text text--darken-1" style="font-style: normal; font-size: 22px;">SHOP</div>
      <v-icon large color="#bbb" dense @click="backToMainNav" style="position: absolute; left:5px; top: 22px;">mdi-chevron-left</v-icon>
    </div>
    <div class="nav-drawer-body">
        <div class="search px-6 pb-2">
            <v-text-field
                outlined
                dense
                hide-details
                class="rounded-xl grey lighten-4"
                placeholder="Search"
            ></v-text-field>
        </div>
        <ul style="list-style-type: none;" class="navcontent-1">
            <li>NEW RELEASES</li>
            <li class="d-flex justify-space-between align-center py-1 pr-2">
                <div>EVERYDAY WEAR</div>
                <v-icon large color="#bbb" dense @click="toWear">mdi-chevron-right</v-icon>
            </li>
            <li>LOUNGE</li>
            <li>TINY THREADS</li>
            <li>ACCESSORIES</li>
            <li>MOM + MINI</li>
            <li>LAST CALL</li>
            <li>GIFT CARD</li>
            <li>SHOP ALL</li>
        </ul>
    </div>
  </div>

  <!-- navdrawer 3 -->
  <div class="nav-drawer-3" :class="{'nav-2-close': nav3, 'nav-2-open': !nav3}">
    <div class="d-flex justify-center nav-drawer-header" style="position: relative;">
      <div class="align-self-center grey--text text--darken-1" style="font-style: normal; font-size: 22px;">EVERYDAY WEAR</div>
      <v-icon large color="#bbb" dense @click="backToShop" style="position: absolute; left:5px; top: 22px;">mdi-chevron-left</v-icon>
    </div>
    <div class="nav-drawer-body">
        <div class="search px-6 pb-2">
            <v-text-field
                outlined
                dense
                hide-details
                class="rounded-xl grey lighten-4"
                placeholder="Search"
            ></v-text-field>
        </div>
        <ul style="list-style-type: none;" class="navcontent-1">
            <li>DRESSES</li>
            <li>PLAYSUITS & OVERALL</li>
            <li>TOPS</li>
            <li>BOTTOMS</li>
        </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
    data:() => ({
        nav1: false,
        nav2: false,
        nav3: false,
    }),
    methods:{
        toShop(){
            this.nav1 = true;
            this.nav2 = true;
        },
        backToMainNav(){
            this.nav1 = false;
            this.nav2 = false;
        },
        toWear(){
            this.nav3 = true;
        },
        backToShop(){
            this.nav3 = false;
        }
    }
}
</script>

<style scoped>
.nav-drawer{
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 80vw;
  background-color: #fff;
  border: 1px solid #eee;
}
.nav-drawer-2{
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 80vw;
  background-color: #fff;
  border: 1px solid #eee;
}
.nav-drawer-3{
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 80vw;
  background-color: #fff;
  border: 1px solid #eee;
}
.nav-drawer-header{
  height: 81px; 
  border-bottom: 1px solid #ddd; 
  font-size: 26px; 
  font-style: italic; 
  color: #585555;
}
.nav-drawer-body{
    padding-top: 14px;
}
.navcontent-1 li{
    padding-top: 10px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(230, 229, 229);
    font-weight: 300;
    font-size: 15px;
    color: black;
    letter-spacing: 1px;
}
.social-media{
    display: flex;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 12px;
}

.nav-1-close{
    transform: translate3d(-30vw,0,0) !important;
    transition: transform 0.4s !important;
}
.nav-1-open{
    transform: translate3d(0,0,0);
    transition: transform 0.4s;
}
.nav-2-open{
    transform: translate3d(80vw,0,0);
    transition: transform 0.4s;
}
.nav-2-close{
    transform: translate3d(0,0,0);
    transition: transform 0.4s;
}
</style>