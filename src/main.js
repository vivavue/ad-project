import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import animate from 'animate.css'

import * as fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(animate)

Vue.config.productionTip = false
fb.initializeApp({
  apiKey: 'AIzaSyDsyULwA_ctqt_10RQBU5arLZWHlxYolmc',
  authDomain: 'ad-project-7dfac.firebaseapp.com',
  databaseURL: 'https://ad-project-7dfac.firebaseio.com',
  projectId: 'ad-project-7dfac',
  storageBucket: 'ad-project-7dfac.appspot.com',
  messagingSenderId: '559492317276',
  appId: '1:559492317276:web:78380dd8f3cce91ae32699',
  measurementId: 'G-JPESN0SWS4'
})

let app

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      created () {
        fb.auth().onAuthStateChanged(user => {
          if (user) {
            this.$store.dispatch('autoLoginUser', user)
          }
        })
      }
    }).$mount('#app')
  }
})
