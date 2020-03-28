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
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: 'Login', icon: 'mdi-login', url: '/login' },
      { title: 'Registration', icon: 'mdi-account', url: '/registration' },
      { title: 'Orders', icon: 'mdi-bookmark', url: '/orders' },
      { title: 'New Ad', icon: 'mdi-bookmark-plus', url: '/new' },
      { title: 'My Ads', icon: 'mdi-view-list', url: '/list' }
    ]
  })
}
</script>
