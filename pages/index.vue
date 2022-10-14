<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="goToPage('/europe')">Europe</v-btn> 
      </v-col>
      <v-col>
        <v-btn @click="goToPage('/afrique')" >Afrique</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="goToPage('/asie')" >Asie</v-btn> 
      </v-col>
      <v-col>
        <v-btn @click="goToPage('/monde')">Monde</v-btn>
      </v-col>
    </v-row>
    <v-row>
    <v-img src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg"></v-img>
   
    
    </v-row>
      
  </v-container>
</template>

<script>
export default {
    data(){
      return{

      }
    },
    beforeMount(){
      this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).get().then(doc => {
        if(doc.exists){
          console.log(doc.data())
          this.$store.commit('addToPanier', doc.data().panier)
        }
      })
      console.log(this.$store.state.panier)
    },
    methods:{
      goToPage(e){
        this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).set({panier: this.$store.state.panier})
        this.$router.replace({path: e})
      }
    }
}
</script>
