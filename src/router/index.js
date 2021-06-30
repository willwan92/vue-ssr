import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: () => import('../components/Index.vue') },
  { path: '/detail', component: () => import('../components/Detail.vue') }
]

export const router =  new VueRouter({
  mode: 'history',
  routes
})

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes
  })
}