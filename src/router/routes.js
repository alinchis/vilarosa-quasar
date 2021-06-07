
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'AboutUs', path: 'aboutUs', component: () => import('pages/AboutUs.vue') },
      // { path: 'certification', component: () => import('pages/Gallery.vue') },
      { name: 'OurServices', path: 'ourServices', component: () => import('pages/OurServices.vue') },
      { name: 'Rooms', path: 'rooms', component: () => import('pages/Rooms.vue') },
      { name: 'Map', path: 'map', component: () => import('pages/Map_mapbox.vue') },
      { name: 'GDPR_RO', path: 'gdpr', component: () => import('pages/PDF.vue') },
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
