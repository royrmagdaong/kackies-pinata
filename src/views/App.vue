<template>
<div class="v-application">
  
  <!-- Nav Drawer -->
  <nav-drawer class="d-flex d-sm-none"></nav-drawer>

  <!-- appbar for mobile devices -->
  <div class="appbar d-flex d-sm-none justify-space-between" :class="{'slide-right': drawer, 'slide-back': !drawer}">
    <div class="align-self-center d-flex ml-2">
      <v-btn icon @click="openNavDrawer" >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="menu">MENU</div>
    </div>
    <div style="font-size: 16px; font-style: italic; color: #585555; position: relative; left: -10px; top:1px;" class="align-self-center">Pinata Manila Ph</div>
    <div class="mr-6 align-self-center" >
      <v-icon small class="mr-2">mdi-cart</v-icon>
      <span style="font-size: 14px;">0</span>
    </div>
  </div>

  <!-- appbar for small screen and above -->
  <div class="d-none d-sm-flex">
    <transition name="slide-fade">
    <div class="appbar-2" v-if="offsetTop > 500">
      <v-container class="d-flex justify-space-between px-4">
        <div class="d-flex align-center">
          <div class="brandname mr-6">Pinata Manila Ph</div>
          <div class="px-2">HOME</div>
          <div class="d-flex align-center px-2">
            SHOP
            <v-icon>mdi-chevron-down</v-icon>
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
    </transition>
  </div>

  <!-- main -->
  <div class="main" :class="{'slide-right': drawer, 'slide-back': !drawer}" v-scroll="onScroll" >
    <div class="d-flex d-sm-none" style="margin-top: 40px;"></div>
    <!-- banner -->
    <app-banner></app-banner>

    <!-- more to explore -->
    <more-to-explore></more-to-explore>

    <!-- pre order bespoke -->
    <pre-order></pre-order>

    <!-- footer -->
    <app-footer></app-footer>
  </div>
</div>
</template>

<script>
import NavDrawer from '../components/NavDrawer'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PreOrderBeSpoke from '../components/PreOrderBeSpoke'
import MoreToExplore from '../components/MoreToExplore'

export default {
  name: 'App',
  components: {
    'nav-drawer': NavDrawer,
    'app-footer': Footer,
    'app-banner': Banner,
    'pre-order': PreOrderBeSpoke,
    'more-to-explore': MoreToExplore
  },
  data:()=>({
    drawer: false,
    scrollY: 0,
    offsetTop: 0
  }),
  created(){

  },
  methods:{
    openNavDrawer(){
      if(!this.drawer){
        const scrollY = document.documentElement.scrollTop;
        this.scrollY = scrollY
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
      }else{
        const body = document.body;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, this.scrollY);
        // this.$vuetify.goTo(this.scrollY, {duration: 0, offset: 0})
      }
      this.drawer = !this.drawer;
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollingElement.scrollTop
      // console.log(e.target.scrollingElement.scrollTop)
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
$body-font-family: 'Source Serif Pro';
$title-font: 'Source Serif Pro';

@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

.v-application {
   font-family: $body-font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: 'Source Serif Pro', serif !important;
    }
 }
// html, body{
//   overflow: hidden;
// }

.main{
  background-color: #fff;
  position: relative;
  z-index: 12;
}
.appbar{
  background-color: #fcfdfd;
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 13;
  width: 100vw;
  height: 40px;
  border-bottom: 1px solid #f0f1f1;
}
.appbar-2{
  background: rgba(255, 255, 255, 0.9);
  position: fixed; 
  z-index: 14; 
  top:0;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}
.brandname{
  font-family: 'Parisienne', cursive;
  font-size: 32px;
  color: #000;
}
.slide-back{
  transform: translate3d(0,0,0);
  transition: transform 0.4s;
}
.slide-right{
  transform: translate3d(80vw,0,0);
  transition: transform 0.4s;
}
.menu{
  font-size: 14px; color: #585555; position: relative; top: 10px;
}
.isMobile{
  margin-top: 40px;
}

// animation
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-enter {
  transform: translateY(-20px);
  opacity: 0;
}
</style>