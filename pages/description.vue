<template>
    <v-container>
      <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
  
      </v-row>



      <div>Description</div>
    </v-card-text>

    

    

    <v-card-text>
      
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Réserver
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-container>
</template>


<script>
    export default {
    data(){
      return{

      }
    }
}
</script>