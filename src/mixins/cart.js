import { apiCartList, apiRemoveCart, apiAddCart } from '@/api'

export default {
  data() {
    return {
      cartList: []
    }
  },
  methods: {
    // 购物车列表
    async apiCartList() {
      const user_id = this.$route.query.user_id || ''
      const data = await apiCartList({ user_id })
      this.cartList = data.data.cart_list
    },
    // 删除购物车
    async apiRemoveCart({ product_id } = {}, refreshCart = false) {
      const res = await confirm('确认移出购物车吗？')
      if (res) {
        const user_id = this.$route.query.user_id || ''
        await apiRemoveCart({ user_id, product_id })

        if (refreshCart) this.apiCartList()
      }
    },
    // 添加购物车
    async apiAddCart({ product_id, quantity, notes } = {}, refreshCart = false) {
      const user_id = this.$route.query.user_id || ''
      await apiAddCart({ user_id, product_id, quantity, notes })
      if (refreshCart) this.apiCartList()
    }
  }
}
