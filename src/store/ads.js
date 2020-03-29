export default {
  state: {
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
  },
  actions: {},
  mutations: {},
  getters: {
    allAds (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ads => ads.promo)
    },
    myAds (state) {
      return state.ads
    }
  }
}
