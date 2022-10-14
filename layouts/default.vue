<template dark="false">  
  <v-app>
    <v-app-bar
      max-height="50"
      height="50" src="https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_960_720.jpg"
      >
      <v-col cols="2">
        <v-text-field class="mt-5" 
        append-icon="mdi-airplane" 
        background-color="black" 
        align-self dense clearable 
        outlined placeholder="Recherche"
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn small @click="goToPage('/')">Accueil</v-btn>
      </v-col>
    <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"/>     
        <v-spacer></v-spacer>
      <v-col>
        <Connexion/>
      </v-col>
      <v-col>
        <v-btn small @click="goToPage('/panier')">Panier</v-btn>
      </v-col> 
    </v-app-bar>


    <v-main>
        <Nuxt />
    </v-main>



    <v-footer>
      <v-spacer></v-spacer>
      <v-row>
        <v-text-area>
          <v-col>
            <button>Qui sommes-nous ?</button><br class="mt-2">
            <button>Conditions générales</button><br class="mt-2">
            <button>Politique de confidentialité</button><br class="mt-2">
          </v-col>
        </v-text-area>
        <v-text-area>
          <v-col>
            <button>Besoin d'aide ?</button><br class="mt-2">
            <button>Covid-19 - Mises à jour sur les voyages</button><br class="mt-2">
            <button>Covid-19 - Procédures de remboursement</button><br class="mt-2">
          </v-col>
        </v-text-area>
        <v-text-area>
          <v-col>
            <button>Séjour pas cher</button><br class="mt-2">
            <button>Week-end guide</button><br class="mt-2">
            <button>Vol par pays</button><br class="mt-2">
          </v-col>
        </v-text-area>
    </v-row>
    <v-spacer></v-spacer>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Around the world'
    }
  },
  beforeMount(){
    setInterval(() => {
    const connected = localStorage.getItem('connected')
        console.log(connected)

    if(connected === true){
              console.log('connected if')

      this.$router.replace({path: '/'})
      }
    },10000)
    this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).get().then(doc => {
            if(doc.exists){
            this.$store.commit('addToPanier', doc.data().panier)
            }
    })
  },
  methods: {
     goToPage(a){
        this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).set({ panier: this.$store.state.panier})
        this.$router.replace({path: a})
      }
  }
}
</script>