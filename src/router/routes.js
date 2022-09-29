// /src/router/routes.js

const routes = [
  {
    path: '/',
    redirect:  { name: 'Rooms' },
    component: () => import('layouts/MainLayout.vue'),
    children: [

      // // about us
      // { name: 'AboutUs', path: 'aboutUs',
      //   component: () => import('pages/AboutUs.vue'),
      //   beforeEnter: (to, from, next) => {
      //     // console.log('beforeEnter: AboutUs');
      //     sessionStorage.setItem('routeName', 'AboutUs');
      //     next();
      //   }
      // },
      //
      // // our services
      // { name: 'OurServices', path: 'ourServices',
      //   component: () => import('pages/OurServices.vue'),
      //   beforeEnter: (to, from, next) => {
      //     // console.log('beforeEnter: OurServices');
      //     sessionStorage.setItem('routeName', 'OurServices');
      //     next();
      //   }
      // },

      // rooms
      { name: 'Rooms', path: 'rooms',
        component: () => import('pages/Rooms.vue'),
        beforeEnter: (to, from, next) => {
          // console.log('beforeEnter: Rooms');
          sessionStorage.setItem('routeName', 'Rooms');
          next();
        }
      },

      // // map
      // { name: 'Map', path: 'map',
      //   component: () => import('pages/Map_mapbox.vue'),
      //   beforeEnter: (to, from, next) => {
      //     // console.log('beforeEnter: Map');
      //     sessionStorage.setItem('routeName', 'Map');
      //     next();
      //   }
      // },

      // // gdpr paths
      // { name: 'GDPRclient', path: 'gdprClient', component: () => import('pages/GDPRclient.vue') },
      //
      // // certification path
      // { name: 'Certification', path: 'certification', component: () => import('pages/Certification.vue') },
      //
      // // photo albums paths
      // { name: 'Albums', path: 'albums', component: () => import('pages/PhotoAlbums.vue') },
      // { name: 'Gallery', path: 'gallery', component: () => import('pages/PhotoGallery.vue') },
      // { name: 'RoomPhotos', path: 'roomPhotos', component: () => import('pages/PhotoViewer.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    // component: () => import('pages/Error404.vue')
    redirect: { name: 'Rooms' }
  }
]

export default routes
