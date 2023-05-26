import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    setCartList(state, payload) {
      state.cartList = payload
    }
  }
})

export default store
