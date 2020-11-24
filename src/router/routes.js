
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/dashboard.vue') },
      { path: '/settings', component: () => import('pages/settings.vue') },
      { path: '/generic', component: () => import('pages/generic.vue') },
      { path: '/auth', component: () => import('pages/Auth.vue') }
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
