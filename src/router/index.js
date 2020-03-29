import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Ad project | Home'
    },
    component: () => import('../views/Home.vue')
  },

  {
    path: '/ad/:id',
    props: true,
    name: 'ad',
    component: () => import('../views/Ads/Ad.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: 'Ad project | My Ads'
    },
    component: () => import('../views/Ads/AdList.vue')
  },
  {
    path: '/new',
    name: 'newAd',
    meta: {
      title: 'Ad project | New Ad'
    },
    component: () => import('../views/Ads/NewAd.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Ad project | Login'
    },
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'Ad project | Registration'
    },
    component: () => import('../views/Auth/Registration.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    meta: {
      title: 'Ad project | Orders'
    },
    component: () => import('../views/User/Orders.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
