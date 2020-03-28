<template>
  <div class="wrapper">
    <v-container class="page" grid-list-lg>
      <h1 class="text-secondary mb-3">Ad List</h1>
      <v-layout row>
        <v-flex xs12 sm6 v-for="ad in ads" :key="ad.id">
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
export default {
  data: () => ({
    ads: [
      {
        id: '1231',
        title: 'First ad',
        description: 'First description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: '1232',
        title: 'Second ad',
        description: 'Second description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        id: '1233',
        title: 'Third ad',
        description: 'Third description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        id: '1234',
        title: 'Forth ad',
        description: 'Forth description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  })
}
</script>
