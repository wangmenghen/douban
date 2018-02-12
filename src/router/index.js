import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Register from '@/page/Register'
// import PagesView from '@/page/PagesView'
import Default from '@/layouts/Default'
import Home from '@/page/Home'
import Detail from '@/page/Detail'
import Movie from '@/page/Movie'
import Book from '@/page/Book'
import Group from '@/page/Group'
import Status from '@/page/Status'
import Subject from '@/page/Subject'
import Search from '@/page/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        },
        {
          path: 'status',
          name: 'Status',
          component: Status
        },
        {
          path: '/:classify/subject/:id',
          name: 'Subject',
          component: Subject
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
