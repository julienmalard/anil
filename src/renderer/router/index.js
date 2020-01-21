import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'மத்திய பக்கம்',
      component: require('@/components/மத்தியபக்கம்').default
    },
    {
      path: '/கட்டுமனம்',
      name: 'கட்டுமனம்',
      component: require('@/components/கட்டுமனம்').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
