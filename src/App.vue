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

      <v-radio-group v-model="rdoValue" :mandatory="false">
        <v-radio label="Working" value="radio-1"></v-radio>
      </v-radio-group>

      <v-radio-group v-model="rdo1Value" :mandatory="false">
        <v-radio label="Not Working" value="radio-1"
                 :on-icon="'$vuetify.icons.radio_on'"
                 :off-icon="'$vuetify.icons.radio_off'"
        ></v-radio>
      </v-radio-group>

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
      },

      rdoChanged() {
        console.log(this.rdoValue);
      },
    },
    data() {
      return {
        chkValue: null,
        chkValue1: null,
        rdoValue: null,
        rdo1Value: null
      }
    }
  }
</script>

