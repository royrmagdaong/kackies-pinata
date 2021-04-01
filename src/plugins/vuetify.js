import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
      thresholds: {
        xs: 760,
        sm: 960,
        md: 1264,
        lg: 1904,
      }
    },
});
