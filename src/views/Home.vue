<template>
  <div class="wrapper">
    <div class="page">
    <v-container>
      <v-carousel cycle show-arrows-on-hover>
        <v-carousel-item
          v-for="ad in ads"
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
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" height="200px"></v-img>

            <v-card-title>{{ ad.title }}</v-card-title>

            <v-card-subtitle>{{ ad.description }}</v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="`/ad/${ad.id}`">Open</v-btn>

              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
