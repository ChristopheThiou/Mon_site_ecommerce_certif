<template>
  <v-row>
    <v-col cols="12">
      <v-btn @click="getFromDatabase"> Get from database</v-btn>
    </v-col>
    <v-col cols="12">
      <code>{{result}}</code>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
  data(){
    return{
      result: null
    }
  },
  methods:{
    async getFromDatabase(){
      this.result = null
         this.$fire.firestore.collection('Voyage').get().then((querySnapshots) => {
          querySnapshots.forEach(doc => {
            console.log(doc.data())
            this.result = (doc.data())
          });
        })
    }
  }
}
</script>
