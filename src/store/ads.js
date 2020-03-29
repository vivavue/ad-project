export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'First ad',
        description: 'First description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: '2',
        title: 'Second ad',
        description: 'Second description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        id: '3',
        title: 'Third ad',
        description: 'Third description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        id: '4',
        title: 'Forth ad',
        description: 'Forth description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = Math.random().toString(36).substr(2, 9)
      commit('createAd', payload)
    }
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  getters: {
    allAds (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ads => ads.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
