import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 60 * 1000
})

// 商品列表
const productList = (params) => instance.post('/api/productList', params)

// 加入购物车
const addCart = (params) => instance.post('/api/addCart', params)

// 移出购物车
const removeCart = (params) => instance.post('/api/removeCart', params)

// 购物车列表
const cartList = (params) => instance.post('/api/cartList', params)

// 创建订单
const order = (params) => instance.post('/api/order', params)

// 订单列表
const orderList = (params) => instance.post('/api/orderList', params)

export { productList, addCart, removeCart, cartList, order, orderList }
