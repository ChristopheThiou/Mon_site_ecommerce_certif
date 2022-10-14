<template>

    <v-row>
      <v-spacer></v-spacer>
      <v-card elevation="8">
        <v-text-field 
        class="mt-5 ml-300" 
        background-color="black" 
        align-self dense clearable 
        outlined placeholder="Identifiant Admin"></v-text-field>
        <v-text-field 
        class="mt-5 ml-300" 
        background-color="black" 
        align-self dense clearable 
        outlined placeholder="Mot de passe Admin"></v-text-field>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>

</template>

<script>
export default {
    data(){
      return{

      }
    }
}
</script>
