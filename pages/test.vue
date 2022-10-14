<template>
		<v-container>
            <v-text-field v-model="nom" placeholder="Nom du produit"/>
            <v-text-field v-model="prix" placeholder="Prix du produit"/>
            <v-text-field v-model="qte" placeholder="Quantité"/>
            <v-text-field v-model="origine" placeholder="Origine"/>
            <v-text-field v-model="image" placeholder="Lien de l'image"/>
            <v-btn @click="sendToFirebase()"> Créer une fiche produit</v-btn>
         
		</v-container>
	 </template>
	 <script>
		export default {
		name: 'addarticle',
        data: () => ({
  	            nom: '',
                prix: '',
                qte: '',
                origine: '',
                image: ''
         }),
			methods:{
                sendToFirebase(){
                    const data = {
                        nom: this.nom,
                        prix: this.prix,
                        qte: this.qte,
                        origine: this.origine,
                        image: this.image,
                        }
                    this.$fire.firestore.collection('database').doc().set(data)
                    console.log(this.nom, this.prix, this.qte, this.origine, this.image)
                }
		 }
        }
     </script>