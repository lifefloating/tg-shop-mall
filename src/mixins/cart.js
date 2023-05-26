import { apiCartList, apiRemoveCart, apiAddCart } from '@/api'
import snackbar from './snackbar'
import store from '@/store'

export default {
  data() {
    return {
      cartLoading: false
    }
  },
  filters: {
    price(val) {
      return Number(val) ? Number(val).toFixed(2) : ''
    }
  },
  computed: {
    subtotal() {
      let total = 0
      this.cartList.forEach((item) => {
        total += +item.quantity * +item.product_price
      })
      return total || 0
    },
    cartList: {
      get() {
        return store.state.cartList
      },
      set(val) {
        store.commit('setCartList', val)
      }
    }
  },
  mixins: [snackbar],
  methods: {
    // 购物车列表
    async apiCartList() {
      const user_id = this.$route.query.user_id || ''
      this.cartLoading = true
      try {
        const data = await apiCartList({ user_id })
        this.cartList = data.data.cart_list
      } finally {
        this.cartLoading = false
      }
    },
    // 删除购物车
    async apiRemoveCart({ product_id } = {}, refreshCart = false) {
      const res = await confirm('确认移出购物车吗？')
      if (res) {
        const user_id = this.$route.query.user_id || ''
        await apiRemoveCart({ user_id, product_id })
        this.showSB({ text: '删除成功', type: 'success' })
        if (refreshCart) this.apiCartList()
      }
    },
    // 添加购物车
    async apiAddCart({ product_id, quantity } = {}, refreshCart = false) {
      const user_id = this.$route.query.user_id || ''
      await apiAddCart({ user_id, product_id, quantity })
      this.showSB({ text: '添加成功', type: 'success' })
      if (refreshCart) this.apiCartList()
    }
  }
}
