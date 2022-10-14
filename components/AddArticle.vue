<template>
		<v-container>
            <v-text-field v-model="nom" placeholder="Nom du produit"/>
            <v-text-field v-model="prix" placeholder="Prix du produit"/>
            <v-text-field v-model="qte" placeholder="Quantité"/>
            <v-text-field v-model="depart" placeholder="Origine"/>
            <v-text-field v-model="image" placeholder="Lien de l'image"/>
            <v-btn @click="sendToFirebase()"> Créer une fiche produit</v-btn>
         
		</v-container>
	 </template>
	 <script>
		export default {
		name: 'addarticle',
        data: () => ({
  	            destination: '',
                prix: '',
                depart: '',
                image: ''
         }),
			methods:{
                sendToFirebase(){
                    const data = {
                        destination: this.destination,
                        prix: this.prix,
                        depart: this.depart,
                        image: this.image,
                        }
                    this.$fire.firestore.collection('database').doc().set(data)
                    console.log(this.destination, this.prix, this.depart, this.image)
                }
		 }
        }
     </script>