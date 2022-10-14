<template>
  <v-row style="position:relative;">

   <v-row>
      <v-spacer></v-spacer>
        <h1 class="mt-10">Toutes nos destinations en direction de l'Asie</h1>
      <v-spacer></v-spacer>
    </v-row>

    <v-col cols="12">
     

      <v-card v-for="(produit, index) in produits" :key="index" @click="userData(produit)" class="pa-5 mt-5">
        <v-row>
          <v-col cols="7" class="pa-7 smalltitle"
            style="font-size:20px; font-family: catamaran;font-weight: bold;font-style: normal;">
             <v-row>Destination : {{ produit.destination }} </v-row> 
            <v-row>Départ : {{ produit.depart }}</v-row>
            <v-row>Prix: {{ produit.prix}} € </v-row>
          </v-col>
          <v-col cols="1">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="4">
            <v-img height="100px" width="900px" :src="produit.image"></v-img>
          </v-col>
        </v-row>

      </v-card>

    </v-col>


    <v-col cols="12">
      <v-card class="mx-auto" max-width="344" v-for="item in infos" :key="item.id">
        <v-img :src="item.image" height="200px"></v-img>

        <v-card-title>
          {{ produit.destination }}
        </v-card-title>

        <v-card-subtitle>
          Prix : {{ produit.prix }} €
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text>
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
 

    <template>
      <v-row justify="center">


        <v-dialog v-model="dialog" max-width="800">
          <v-card v-if="selectedProduit" class="pa-7 text-center">
            <v-row class="text-center blue-grey white--text" style="text-align:center;">
              <h2 class="mx-auto "> {{ selectedProduit.destination }}</h2>
            </v-row>

            <v-row style="padding:5px;">
              <v-col cols="6">
                <v-row>
                  <v-col cols="12">
                    <v-img size="200px" :src="selectedProduit.image"></v-img>
                  </v-col>
                  
                  <v-col cols="12" class="mt-5 ">
                    <v-slider v-model="ex3.val" :label="ex3.label" :thumb-color="
                    ex3.color" min="1" max="20" thumb-label="always">
                    </v-slider>
                  </v-col>

                  <v-col cols="12">
                    <v-btn block outlined color="success" 
                    @click="addToCart(selectedProduit)"> Commander <v-icon class="ml-5">mdi-cart</v-icon>
                    </v-btn>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-btn block @click="refresh" color="error"> Retour
                    </v-btn>
                  </v-col>

                </v-row>
              </v-col>
              <v-col cols="6" style="border: 2px solid orange;">
                  <v-row class="mt-5 ml-4">
                      Destination : {{ selectedProduit.destination }}
                  </v-row>
                  <v-row class="mt-5 ml-4">
                    Prix : {{ (selectedProduit.prix) * ex3.val  }} €
                  </v-row>

                  <v-row class="ml-4">
                    Description : 
                    <div class="mr-4" style="font-size:14px; font-weight: 200;"> Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Fugit doloribus voluptas quam corrupti maiores 
                    tempora laboriosam soluta cumque tempore. Perferendis esse ipsum fugit ratione nihil 
                    commodi culpa deleniti dolorem mollitia.</div>
                  </v-row>
              </v-col>
            </v-row>
  
          </v-card>

        </v-dialog>
      </v-row>
    </template>

<template>
      <v-row justify="center">


        <v-dialog v-model="dialogAddArticle" >
          <v-card >
            <AddArticle />
            <v-btn style="position:absolute; right: 5px; bottom:5px;
            " outlined color="red" @click="refresh"> Retour
            </v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
</v-row>
</template>

<script>
    
    export default {
        
        data() {
            return {
                ex3: {
                    label: 'Quantité',
                    val: 1,
                    color: 'pink'
                },
                dialogAddArticle: false,
                dialogConfirmation: true,
                formulaireLog: null,
                formulairePass: null,
                show: false,
                infos: null,
                dialog: false,
                selectedProduit: null,
                produits: []
            }
        },
        beforeMount() {
            console.log('--> BEFORE MOUNT')
            this.getData()
            this.$fire.firestore.collection('temps').doc(localStorage.getItem('identifiant')).get().then(doc => {
            if(doc.exists){
            this.$store.commit('addToPanier', doc.data().panier)
            }
          })
        },
        methods: {
          addToCart(produit){
            let listePanier = []
            const cart = this.$store.state.panier
            console.log(cart)
            cart.forEach((e) => {
              listePanier.push(e)
            }) 
            listePanier.push({...produit, ...{qte: this.ex3.val}})
            this.$store.commit('addToPanier', listePanier)
            console.log(this.$store.state.panier)
          },
            userData(produit) {
                this.dialog = true
                this.selectedProduit = produit
            },
            async getData() {
                this.produits = []
                    // RECUPERE TOUS LES DOCUMENTS D'UNE COLLECTION
                this.$fire.firestore.collection('Asie').get().then((querySnapshots) => {
                    querySnapshots.forEach(doc => {
                        this.produits.push(doc.data())
                    });
                    console.log(this.produits)
                })
            },
            refresh() {
                this.dialogAddArticle = false
                this.dialog = false
                this.getData()

            }
        }
    }
</script>
