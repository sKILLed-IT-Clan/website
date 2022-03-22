import Vue from 'vue'
import Router from 'vue-router'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import History from '@/components/History/History'
import Leaders from '@/components/Leaders/Leaders'
import Roster from '@/components/Roster/Roster'
import Join from '@/components/Join/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/leaders',
      name: 'Leaders',
      component: Leaders
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    }
  ]
})
