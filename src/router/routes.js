
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/page-todo.vue')
      },
      {
        path: 'settings',
        component: () => import('pages/page-settings.vue')
      },
      {
        path: 'settings/help',
        component: () => import('pages/page-help.vue')
      },
      {
        path: 'auth',
        component: () => import('pages/page-auth.vue')
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/error404.vue')
  }
]

export default routes
