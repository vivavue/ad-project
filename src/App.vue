<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item-group color="teal">
          <v-list-item v-for="link in links" :key="link.title" :to="link.url">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isUserLoggedIn" @click="onLogout">
            <v-list-item-icon>
              <v-icon v-text="'mdi-logout'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Logout'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="teal">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-items>
        <v-btn text to="/">Ad application</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link. title }}
        </v-btn>
        <v-btn v-if="isUserLoggedIn" @click="onLogout" text>
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <transition
        name="router-anim"
        enter-active-class="animated lightSpeedIn"
        leave-active-class="animated lightSpeedOut"
      >
        <router-view />
      </transition>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn text dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters(['error', 'isUserLoggedIn']),
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark', url: '/orders' },
          { title: 'New Ad', icon: 'mdi-bookmark-plus', url: '/new' },
          { title: 'My Ads', icon: 'mdi-view-list', url: '/list' }
        ]
      }
      return [
        { title: 'Login', icon: 'mdi-login', url: '/login' },
        { title: 'Registration', icon: 'mdi-account', url: '/registration' }
      ]
    }
  },
  methods: {
    ...mapActions(['clearError', 'logoutUser']),
    closeError () {
      this.clearError()
    },
    onLogout () {
      this.logoutUser()
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
.wrapper {
  filter: blur(0);
}

.page {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

.car-link {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  background: #000;
  opacity: 0.5;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
}
</style>
