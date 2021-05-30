
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'aboutUs', component: () => import('pages/AboutUs.vue') },
      { path: 'ourServices', component: () => import('pages/OurServices.vue') },
      { path: 'prices', component: () => import('pages/Prices.vue') },
      { path: 'map', component: () => import('pages/Map_mapbox.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
