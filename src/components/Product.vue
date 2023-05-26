<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item :src="`data:image/jpg;base64,${product.product_image}`"> </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.product_name }}</p>
            <v-card-actions class="pa-0">
              <div class="headline font-weight-light pt-3">
                <div class="col-12 pa-0">￥{{ product.product_price | price }}</div>
                <div class="col-12 pa-0">
                  <del style="" class="subtitle-1 font-weight-thin">￥{{ (+product.product_price * 1.2) | price }}</del>
                </div>
              </div>
              <v-spacer></v-spacer>
              <v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
              <span class="body-2 font-weight-thin">25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.product_description }}
            </p>
            <p class="title">数量</p>

            <div class="d-flex" style="margin-bottom: 16px">
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
                    if (quantity > 0) quantity--
                  }
                "
              >
                -
              </div>
              <div style="margin: 0 6px">{{ quantity }}</div>
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
                @click="() => quantity++"
              >
                +
              </div>
            </div>
            <v-btn class="primary white--text" outlined tile dense @click="() => apiAddCart({ product_id, quantity }, 1)">
              <v-icon>mdi-cart</v-icon>添加购物车
            </v-btn>
            <!-- <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>商品介绍</v-tab>
            <v-tab>商品规格</v-tab>
            <v-tab>评价</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
                mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor
                urna nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis
                cras. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra
                maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
                mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor
                urna nunc id cursus metus. Integer feugiat scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis
                cras. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus commodo viverra
                maecenas. Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list three-line="true" avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i" inactive="true">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> {{ item.title }}</v-list-item-title>
                      <v-rating v-model="item.rating" class="" background-color="warning lighten-3" color="warning" dense></v-rating>
                      <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
          <!-- <v-card-text class="pa-0 pt-4" tile outlined>
            <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/home/deal1.jpg')">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Baggit, Zara, Fossil</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/home/deal2.jpg')">
                      <v-card-title>T-Shirt </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 50%</div>
                      <div>Zara, Selected, Celio</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/home/deal3.jpg')">
                      <v-card-title>Jeans </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Jack & Jones, Levis</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/shop/5.jpg')">
                      <v-card-title>Shirts </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/home/deal4.jpg')">
                      <v-card-title>Shoes </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="require('../assets/img/shop/3.jpg')">
                      <v-card-title>Jackets </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text> -->
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { apiProductDetail } from '@/api'
import cart from '@/mixins/cart'

export default {
  data: () => ({
    rating: 4.5,
    item: 5,
    quantity: 1,
    product_id: '',
    product: {},
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: '182****1412',
        subtitle: '这家店的服务非常出色，卖家很耐心地为我解答了我的问题，并提供了高质量的商品。非常感谢！',
        rating: 4
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: '189****2312',
        subtitle: '我非常喜欢这家店，他们的产品质量很好，价格也非常合理。我非常满意我的购买。',
        rating: 5
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: '135****5211',
        subtitle: '卖家的发货速度非常快，商品也很棒。非常愉快的购物体验！',
        rating: 5
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: '183****9122',
        subtitle: '这家店的客服非常友好，帮我解决了很多问题，在购买过程中为我提供了很多帮助。',
        rating: 4
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: '131****0326',
        subtitle: '👍👍👍👍👍👍',
        rating: 5
      }
    ]
  }),
  created() {
    this.product_id = this.$route.query.product_id || ''
    if (this.product_id) this.getProduct()
  },
  mixins: [cart],
  methods: {
    async getProduct() {
      const data = await apiProductDetail({ product_id: this.product_id })
      this.product = data.data.product
    }
  }
}
</script>
