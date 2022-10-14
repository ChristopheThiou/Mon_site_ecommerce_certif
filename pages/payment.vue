<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
        <h1>Choisisez votre méthode de payment</h1>
      <v-spacer></v-spacer>
    </v-row>

  <v-row>
    <v-btn class="mt-15">
     <v-banner>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-credit-card-lock"
        color="white"
      >
        mdi-credit-card-lock
      </v-icon>
    </v-avatar>

Visa/Master card
    <template>

    </template>
  </v-banner>
  </v-btn>
    </v-row>


    <v-row>
  <v-btn class="mt-15">
     <v-banner>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-cash-clock"
        color="white"
      >
        mdi-cash-clock
      </v-icon>
    </v-avatar>

Paypal
    <template>

    </template>
  </v-banner>
  </v-btn>
  </v-row>


  <v-row>
  <v-btn class="mt-15">
     <v-banner>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-bitcoin"
        color="white"
      >
        mdi-bitcoin
      </v-icon>
    </v-avatar>

Bitcoin
    <template>

    </template>
  </v-banner>
  </v-btn>
  </v-row>


    
  </v-container>
</template>

<script>
export default {
    data(){
      return{

      }
    }
}
</script>
