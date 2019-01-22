
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';

import {MdIcons} from "./mdIcons";
import 'vuetify/dist/vuetify.min.css'
import "vue-material-design-icons/styles.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  options: {
    themeVariations: ['primary'],
    customProperties: true
  },
  icons: MdIcons
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',


  mounted() {

    console.log(this.$vuetify.icons);

  }
});

