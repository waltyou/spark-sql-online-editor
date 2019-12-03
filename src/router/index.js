import Vue from 'vue'
import Router from 'vue-router'
import SparksqlEditor from '@/components/SparksqlEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SparksqlEditor',
      component: SparksqlEditor
    }
  ]
})
