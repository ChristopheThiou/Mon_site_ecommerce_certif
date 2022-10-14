<template>
  <v-container>
    <v-row v-if="!this.$store.state.panier">
      <v-spacer></v-spacer>
        <h1>Votre panier est vide</h1>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-5" style="background-color: black; color: white;">
        <v-col class="tableau"> Quantité</v-col>
        <v-col class="tableau"> Destination</v-col>
        <v-col class="tableau"> Départ</v-col>
        <v-col class="tableau"> Prix</v-col>
    </v-row>
    <v-row v-for="(produit, index) in $store.state.panier" :key="index">
        <v-col class="tableau"> {{produit.qte}}</v-col>
        <v-col class="tableau"> {{produit.destination}} </v-col>
        <v-col class="tableau"> {{produit.depart}}</v-col>
        <v-col class="tableau"> {{produit.prix * produit.qte}}€</v-col>
    </v-row>
    <v-row>
    <v-btn class="mt-5" @click="viderPanier"> Vider le panier </v-btn>
     <v-chip class="mt-5 ml-5" color="info">  Total : {{total($store.state.panier)}}€ </v-chip>
     </v-row>
     <v-row>
    <v-btn class="mt-5" @click="Payer">Payer</v-btn>
     </v-row>
</v-container>
</template>

<script>
export default {
    data(){
      return{
        total(e){
          let total = 0
          e.forEach(element => {
            total = (parseInt(element.prix) * parseInt(element.qte)) + parseInt(total)
          })
          return total
        }
      }
    },
    methods:{
       viderPanier(){
        this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).set({panier: []})
        this.$store.commit('addToPanier', [])
       }
    }

}
</script>
<style>
.tableau{
  border: solid 1px white;
}
</style>
