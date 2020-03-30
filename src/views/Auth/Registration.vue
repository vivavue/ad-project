<template>
  <div class="wrapper">
    <v-container class="page" fill-height fluid>
      <v-layout mt-5 justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar color="teal" dark flat>
              <v-toolbar-title>Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form autocmplete="off" v-model="valid" ref="form" validation>
                <v-text-field
                  color="teal"
                  label="Email"
                  append-icon="mdi-email"
                  type="text"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                />

                <v-text-field
                  color="teal"
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  :rules="[rules.required, rules.min]"
                  :counter="6"
                  @click:append="show1 = !show1"
                />

                <v-text-field
                  color="teal"
                  v-model="confirmPassword"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  label="Confirm Password"
                  :rules="[rules.required, passwordConfirmationRule]"
                  :counter="6"
                  @click:append="show2 = !show2"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="teal"
                @click="onSubmit"
                :loading="loading"
                :disabled="!valid || loading"
              >Create account</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    show1: false,
    show2: false,
    password: '',
    confirmPassword: '',
    email: '',
    rules: {
      required: v => !!v || 'This field is required',
      email: v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid',
      min: v =>
        v.length >= 6 || 'Password must be equal or more than 6 characters'
    }
  }),
  computed: {
    passwordConfirmationRule () {
      return () =>
        this.password === this.confirmPassword || 'Password must match'
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          password: this.password,
          email: this.email
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>
