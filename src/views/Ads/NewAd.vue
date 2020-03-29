<template>
  <div class="wrapper">
    <v-container class="page">
      <v-flex>
        <v-flex xs10 offset-xs1 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">Create new ad</h1>
          <v-form v-model="valid" ref="form" autocomplete="off" validation>
            <v-text-field
              color="teal"
              label="Ad title"
              name="title"
              type="text"
              v-model="title"
              :rules="[rules.required, rules.min]"
              counter
            />

            <v-textarea
              color="teal"
              name="description"
              label="Ad description"
              v-model="description"
              :rules="[rules.required]"
            ></v-textarea>
          </v-form>
          <v-flex>
            <v-flex xs12 my-5>
              <v-btn color="blue-grey" type="file">
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <v-layout>
            <v-flex xs12>
              <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="100" alt />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-switch color="teal" v-model="promo" label="Add to promo?"></v-switch>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" class="teal" @click="createAd">Create ad</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    promo: false,
    description: '',
    title: '',
    rules: {
      required: v => !!v || 'This field is required',
      min: v => v.length >= 8 || 'Min 8 characters'
    }
  }),
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  }
}
</script>
