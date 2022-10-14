<template>
    <v-container>
        <center>
        <v-card height="400" width="400">
            <v-carousel v-model="model">
    <v-carousel-item 
    v-for="(film, i) in listeFilms" :key="i"
        :src="film.image"
        contain
      >
      <v-row>
    <div class="mt-5 ml-5">Titre : {{film.titre}}, Année : {{film.annee}}</div>
  </v-row>
  <v-row>
    <div class="ml-5">Réalisateur : {{film.real}}</div>
  </v-row>
  <v-row >
    <div class="ml-5">Description : {{film.description}}</div>
  </v-row>
  <v-row >
    <div class="ml-5">Pays : {{film.pays}}</div>
  </v-row>
    </v-carousel-item>
  </v-carousel>
        </v-card>
        </center>
    </v-container>   
</template>
<script>
    export default{
        data(){
            return{
                model: 0,
                listeFilms: [
                    {titre: 'Spiderman', annee: '2020', real: 'Jacquie et Michel', image: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png', description: '...', pays: 'Italie'},
                    {titre: 'Superman', annee: '2012', real: 'Abdel arouf', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uyS82GqJcM1wvfrBUtTsuXVEUbfVlTL-7g&usqp=CAU', description: '...', pays: 'Belgique'},
                    {titre: 'La mouche', annee: '1988', real: 'Jean-Kevin', image: 'https://www.ecranlarge.com/media/cache/637x252/uploads/articles/000/896/437/la-mouche-photo-994192-large.jpg', description: '...', pays: 'Mexico'},
                    {titre: 'Ca', annee: '1987', real: 'Guy Tarenbois', image: 'https://gonzomusic.fr/files/ca-chapitre-2-une-scene-va-repousser-les-limites-du-gore-96043-1024x576.jpg', description: '...', pays: 'Non'},
                    {titre: 'Candyman', annee: '1987', real: 'Jean Bon', image: 'https://dailygeekshow.com/wp-content/uploads/2020/08/Candyman1992.jpg', description: '...', pays: 'Suisse'},
                    ]
            }
        }
    }
</script>