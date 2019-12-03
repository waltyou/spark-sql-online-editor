import Vue from 'vue'
import Router from 'vue-router'
import SparksqlEditor from '@/components/SparksqlEditor'
import SelfsqlEditor from '@/components/SelfsqlEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SparksqlEditor',
      component: SparksqlEditor
    },
    {
      path: '/selfsql',
      name: 'SelfsqlEditor',
      component: SelfsqlEditor
    }
  ]
})
