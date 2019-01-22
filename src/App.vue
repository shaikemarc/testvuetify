<template>
  <v-app>
    <v-content>
   <v-autocomplete
   clearable
   :items="items"
   item-text="display"
   v-model="selected"
   return-object
   >

   </v-autocomplete>
    </v-content>
  </v-app>
</template>

<script>



  export default {
    name: 'App',

    data() {
      return {
        selected: null,
        items: [
          {id: "1", display: "display1" },
          {id: "2", display: "display2" },
          {id: "3", display: "display3" },
          {id: "4", display: "display4" },
          {id: "5", display: "display5" },
        ]
      }
    }
  }
</script>

