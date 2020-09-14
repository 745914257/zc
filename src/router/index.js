import Vue from 'vue'
import Router from 'vue-router'
import index from './../views/index'
import cart from  "./../views/cart"
import my from "./../views/my"
import detail from "./../views/detail"
import order from "./../views/order"
import addressList from "./../views/addressList"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: addressList
    }
  ]
})
