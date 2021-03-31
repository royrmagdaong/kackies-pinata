import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // }
  ]
});

router.beforeEach((to, from, next) => {
    
    // if(requiresAuth && currentUser==null) {
    //   next('login');
    // }else{
    //   next();
    //   //window.console.log('normal route');
    // }

    next();
  });

export default router;