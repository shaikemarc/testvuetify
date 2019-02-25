<template>
  <v-app>
    <v-content>

   <v-checkbox
     label="working"
     value="v"
     v-model="chkValue"
     @change="chkChanged()"
   ></v-checkbox>

      <v-checkbox
        label="not working"
        value="v1"
        :on-icon="'$vuetify.icons.checkbox_on'"
        :off-icon="'$vuetify.icons.checkbox_off'"
        v-model="chkValue1"
        @change="chk1Changed()"
      ></v-checkbox>

    </v-content>
  </v-app>
</template>

<script>


  export default {
    name: 'App',

    methods: {
      chkChanged() {
       console.log(this.chkValue);
      },
      chk1Changed() {
        console.log(this.chkValue1);
      }
    },
    data() {
      return {
        chkValue: null,
        chkValue1: null
      }
    }
  }
</script>

