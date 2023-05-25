<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">购物车</p>
      <v-row>
        <v-col :cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">商品</th>
                  <th class="text-center">价格</th>
                  <th class="text-center">数量</th>
                  <th class="text-center">总计</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
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
                  <td>￥{{ item.product_price }}</td>
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
                        "
                        @click="() => item.quantity++"
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td style="min-width: 56px">{{ +item.quantity * +item.product_price }}</td>
                  <td><v-btn color="error" raised rounded text @click="() => apiRemoveCart({ product_id: item.product_id }, true)">删除</v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">Shipping and additional costs are calculated based on values you have entered.</p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td class="text-right" style="width: 50px">$160.00</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td class="text-right" style="width: 50px">$10.00</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td class="text-right" style="width: 50px">$5.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width: 50px"><b>$175.00</b></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined>PROCEED TO PAY</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card class="accent">
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
