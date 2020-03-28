<template>
  <div class="wrapper">
    <v-container class="page">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text-secondary mb-5">Orders</h1>
          <v-list two-line subheader>
            <v-list-item v-for="order in orders" :key="order.id">
              <v-list-item-action>
                <v-checkbox :input-value="order.done" color="teal" @change="markDone(order)"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn :to="`/ad/${order.adId}`" class="teal">Open</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'Sargis',
          phone: '8-921-121-12-12',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
