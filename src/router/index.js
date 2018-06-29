import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import About from '@/components/About'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookList
    },
    {
      path: '/books',
      name: 'bookList',
      component: BookList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/books/:bookId',
      query: { edit: true },
      name: 'book',
      component: Book,
      props: (route) => ({ bookId: route.params.bookId, edit: String(route.query.edit).toLowerCase() === 'true' })
    }
  ]
})
