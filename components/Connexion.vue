<template>
<v-container>
  <v-btn  v-if="connected === false" @click="menu = !menu">
    <v-icon>mdi-key</v-icon>
  </v-btn>
  <v-btn  v-else @click="deconnexion">
      <v-icon color="error" >mdi-power</v-icon>
      </v-btn>



  <v-dialog  v-model="menu" >
  <v-card class="pa-8" >
    <v-card-title class="justify-center"> Connexion</v-card-title>
  <v-row>
    <v-text-field v-model="identifiant" placeholder="Identifiant">  </v-text-field>
  </v-row>
  <v-row>
    <v-text-field v-model="mdp" type="password" placeholder="Mot de passe">  </v-text-field>
  </v-row>
  <v-row class="mb-5">
    <v-spacer></v-spacer>
        <v-btn @click="connexion"> Connexion</v-btn>
    <v-spacer></v-spacer>

  </v-row>
  <v-row v-if="connected">
     <v-alert dense type="success" width="100%"> Vous êtes connecté </v-alert>
  </v-row>
  <v-row v-else>
     <v-alert dense type="error" width="100%"> Vous êtes déconnecté </v-alert>
  </v-row>
  <v-row v-if="erreur">
     <v-alert dense type="warning" width="100%"> Mauvais mot de passe </v-alert>
  </v-row>
  <v-row v-if="erreurMdp">
     <v-alert dense type="warning" width="100%"> Votre mot de passe doit comporter au moins 6 caractères </v-alert>
  </v-row>
  <v-row v-if="erreurIdentifiant">
     <v-alert dense type="warning" width="100%"> Cet identifiant est invalide !  </v-alert>
  </v-row>
  </v-card>
   </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      data: null,
      connected: 'false',
      identifiant: null,
      mdp: null,
      defaultUser: 'Thomas',
      defaultMdp: 'Toto123',
      erreur: false,
      erreurMdp: false,
      menu: false,
      erreurIdentifiant: false
    }
  },

  methods: {

    deconnexion(){
         localStorage.setItem('connected', false)
         localStorage.setItem('identifiant', null)
         this.connected = false
         console.log('déconnexion')
         //this.$router.replace({ path: 'inspire'})
    },
     connexion() {
        this.$fire.firestore.collection('Users').doc(this.identifiant).get().then(doc => {
          if(doc.exists){
            this.erreurIdentifiant = false
            this.defaultMdp = doc.data().pass
            

            if(this.mdp.length < 6){
                this.erreurMdp = true
                return
            }
        if(this.mdp === this.defaultMdp){
          this.menu = false
          localStorage.setItem('identifiant', this.identifiant)
          localStorage.setItem('connected', true)
          this.erreur = false
          this.erreurMdp = false
          this.connected = true
        } else {
          this.erreurMdp = false
          this.erreur = true
          this.connected = false
         localStorage.setItem('identifiant', null)
          localStorage.setItem('connected', false)
        }
          } else {
            this.erreurIdentifiant = true
          }
        })

    }
  }
}
</script>