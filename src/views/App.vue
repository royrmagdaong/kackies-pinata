<template>
<div id="inspire" class="v-application">
  
  <!-- Nav Drawer -->
  <nav-drawer></nav-drawer>

  <!-- appbar -->
  <div class="appbar d-flex justify-space-between" :class="{'slide-right': drawer, 'slide-back': !drawer}">
    <div class="align-self-center d-flex ml-2">
      <v-btn icon @click="openNavDrawer" >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="menu">MENU</div>
    </div>
    <div style="font-size: 16px; font-style: italic; color: #585555; position: relative; left: -10px; top:1px;" class="align-self-center">Kackie's Pinata</div>
    <div class="mr-6 align-self-center" >
      <v-icon small class="mr-2">mdi-cart</v-icon>
      <span style="font-size: 14px;">0</span>
    </div>
  </div>

  <!-- main -->
  <div class="main" :class="{'slide-right': drawer, 'slide-back': !drawer}">
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
  }),
  created(){
  },
  methods:{
    openNavDrawer(){
      if(!this.drawer){
        const scrollY = document.documentElement.scrollTop;
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
      }else{
        const body = document.body;
        // const scrollY = body.style.top;
        body.style.position = '';

        body.style.top = '';
        // body.style.position = 'relative';
        // body.style.top = `-${scrollY}px`;
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
        // this.$vuetify.goTo(1500, {duration: 400, offset: 0})
      }
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
$body-font-family: 'Source Serif Pro';
$title-font: 'Source Serif Pro';

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
  margin-top:40px;
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
</style>