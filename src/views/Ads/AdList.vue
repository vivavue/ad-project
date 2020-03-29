<template>
  <div class="wrapper">
    <v-container class="page" grid-list-lg>
      <h1 class="text-secondary mb-3">Ad List</h1>
      <v-layout row>
        <v-flex xs12 sm6 v-for="ad in myAds" :key="ad.id">
          <v-card class="elevation-10 mb-5">
            <v-container>
              <v-layout>
                <v-flex xs4>
                  <v-img :src="ad.imageSrc" height="160px"></v-img>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <h2 class="text--primary">{{ ad.title }}</h2>
                    <p>{{ ad.description }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="teal" :to="`/ad/${ad.id}`">Open</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['myAds'])
}
</script>
