<template>
  <div class="wrapper">
    <div class="page">
    <v-container>
      <v-carousel cycle show-arrows-on-hover>
        <v-carousel-item
          v-for="ad in promoAds"
          :key="ad.id"
          :src="ad.imageSrc"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <div class="car-link">
            <v-btn class="error" :to="`/ad/${ad.id}`">{{ ad.title }}</v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row>
        <v-flex xs12 sm6 md4 v-for="ad in allAds" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" height="200px"></v-img>

            <v-card-title>{{ ad.title }}</v-card-title>

            <v-card-subtitle>{{ ad.description }}</v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="`/ad/${ad.id}`">Open</v-btn>

              <v-btn raised class="teal">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['allAds', 'promoAds'])
}
</script>
