<template>
  <div class="wrapper">
    <v-container class="page" grid-list-lg>
      <v-layout row>
        <v-flex xs12 sm10 offset-sm1>
          <v-card>
            <v-img :src="ad.imageSrc" height="300px"></v-img>
            <v-card-text>
              <h1 class="text--primary">{{ ad.title }}</h1>
              <p>{{ ad.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="warning" text>Edit</v-btn>
              <v-btn class="teal">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>
