<template>
  <div class="wrapper">
    <v-container class="page" fluid fill-height>
      <v-layout mt-5 justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar color="teal" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form autocmplete="off" v-model="valid" ref="form" validation>
                <v-text-field
                  color="teal"
                  label="Email"
                  append-icon="mdi-email"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  text
                />

                <v-text-field
                  color="teal"
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Password"
                  :rules="passwordRules"
                  :counter="6"
                  @click:append="show = !show"
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
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    valid: false,
    show: false,
    password: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 6 || 'Password must be equal or more than 6 characters'
    ]
  }),
  computed: mapGetters(['loading']),
  methods: {
    ...mapActions(['loginUser']),
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          password: this.password,
          email: this.email
        }
        this.loginUser(user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
