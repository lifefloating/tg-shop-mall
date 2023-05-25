import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import Blog from '@/components/Blog'
import Post from '@/components/Post'
import Cart from '@/components/Cart'
import Layout from '@/components/Layout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Home,
          name: 'Home'
        },
        {
          path: 'shop',
          component: Shop,
          name: 'Shop'
        },
        {
          path: 'product',
          component: Product,
          name: 'Product'
        },
        {
          path: 'blog',
          component: Blog,
          name: 'Blog'
        },
        {
          path: '/post',
          component: Post,
          name: 'Post'
        },
        {
          path: '/cart',
          component: Cart,
          name: 'Cart'
        }
      ]
    }
  ],
  mode: 'hash'
})
router.beforeEach((to, from, next) => {
  if (from.query.user_id && !to.query.user_id) {
    console.log(123123, from.path !== to.path && !!from.query.user_id, from.path, to.path)
    to.query.user_id = from.query.user_id
    next(to)
  } else {
    next()
  }
})

export default router
