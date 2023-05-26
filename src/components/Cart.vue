<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">购物车</p>
      <v-skeleton-loader type="list-item-avatar-three-line" v-if="cartLoading"> </v-skeleton-loader>
      <v-row v-else>
        <v-col :cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">商品</th>
                  <th class="text-center">价格</th>
                  <th class="text-center">数量</th>
                  <th class="text-center">总价</th>
                  <th class="text-center"></th>
                </tr>
              </thead>

              <tbody v-if="cartList.length === 0">
                <tr>
                  <td colspan="5" style="height: 200px; font-size: 16px; color: #ccc; text-align: center">购物车空空如也</td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr v-for="(item, index) in cartList" :key="index">
                  <td>
                    <v-list-item key="1">
                      <v-list-item-avatar>
                        <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content style="max-width: 20vw">
                        <v-list-item-title>{{ item.product_name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.product_description }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td>￥{{ item.product_price | price }}</td>
                  <td>
                    <div class="d-flex">
                      <div
                        style="
                          font-size: 18px;
                          width: 20px;
                          height: 20px;
                          border-radius: 4px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          border: 1px solid #ccc;
                          cursor: pointer;
                          user-select: none;
                        "
                        @click="
                          () => {
                            if (item.quantity > 0) item.quantity--
                          }
                        "
                      >
                        -
                      </div>
                      <div style="margin: 0 6px">{{ item.quantity }}</div>
                      <div
                        style="
                          font-size: 18px;
                          width: 20px;
                          height: 20px;
                          border-radius: 4px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          border: 1px solid #ccc;
                          cursor: pointer;
                          user-select: none;
                        "
                        @click="() => item.quantity++"
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td style="min-width: 56px">{{ (+item.quantity * +item.product_price) | price }}</td>
                  <td><v-btn color="error" raised rounded text @click="() => apiRemoveCart({ product_id: item.product_id }, true)">删除</v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>

        <v-col :cols="12" style="background-color: lightgray" v-if="cartList && cartList.length">
          <p class="headline">结算</p>
          <p class="overline"></p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>小计</td>
                  <td class="text-right" style="width: 50px">￥{{ subtotal | price }}</td>
                </tr>
                <tr>
                  <td>邮费</td>
                  <td class="text-right" style="width: 50px">￥0.00</td>
                </tr>
                <tr>
                  <td>总计</td>
                  <td class="text-right" style="width: 50px">
                    <b>￥{{ subtotal | price }}</b>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined>支付</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import cartMixin from '@/mixins/cart'
export default {
  data: () => ({
    rating: 4.5,
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home'
      },
      {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing'
      },
      {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts'
      }
    ]
  }),
  mixins: [cartMixin],
  created() {
    this.apiCartList()
  }
}
</script>
