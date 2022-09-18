import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

//import component
import PostIndexC from '@/components/carPark/IndexC.vue'
import PostCreateC from '@/components/carPark/CreateC.vue'
import PostUpdateC from '@/components/carPark/UpdateC.vue'

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'tampil',
      component: PostIndexC
    },
    {
      path: '/create',
      name: '/create',
      component: PostCreateC
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PostUpdateC
    }
  ],
  mode: 'history'
})

export default router

