import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

//import component
import PostIndexC from '@/components/carPark/IndexC.vue'
import DetailC from '@/components/carPark/DetailC.vue'  

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'tampil',
      component: PostIndexC,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailC,
    },
  ],
  mode: 'history'
})

export default router

