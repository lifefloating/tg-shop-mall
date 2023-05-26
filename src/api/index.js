import axios from 'axios'
import snackbar from '@/mixins/snackbar'

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 60 * 1000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

// 错误处理
instance.interceptors.response.use(
  function (response) {
    if (response.data.status !== 'SUCCESS') {
      snackbar.methods.showSB({ text: response.data.desc || '出错了，请稍后再试。', type: 'error' })
      return Promise.reject(response.data.desc || '出错了，请稍后再试。')
    }
    return response.data
  },
  (error) => {
    snackbar.methods.showSB({ text: '出错了，请稍后再试。', type: 'error' })
    return Promise.reject('出错了，请稍后再试。')
  }
)

// 商品列表
const apiProductList = (params) => instance.post('/api/productList', params)

// 加入购物车
const apiAddCart = (params) => instance.post('/api/addCart', params)

// 移出购物车
const apiRemoveCart = (params) => instance.post('/api/removeCart', params)

// 购物车列表
const apiCartList = (params) => instance.post('/api/cartList', params)

// 创建订单
const apiOrder = (params) => instance.post('/api/order', params)

// 订单列表
const apiOrderList = (params) => instance.post('/api/orderList', params)

// 产品详情
const apiProductDetail = (params) => instance.post('api/productDetail', params)

export { apiProductList, apiAddCart, apiRemoveCart, apiCartList, apiOrder, apiOrderList, apiProductDetail }
