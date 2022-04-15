const routes = [
  {
    path: '/',
    component: () => import('../pages/Table')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
