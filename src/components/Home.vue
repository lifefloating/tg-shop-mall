<template>
  <div>
    <v-carousel :height="height" hide-delimiter-background>
      <v-carousel-item :src="`${BASE_API}/api/slider/${img}`" v-for="(img, index) in banner" :key="index"> </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading"><v-icon style="color: red">mdi-fire</v-icon>今日热卖</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" v-for="(item, index) in products" :key="index">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px" :src="`data:image/jpg;base64,${item.product_image[0]}`">
                      <v-card-title>{{ item.product_name }}</v-card-title>
                    </v-img>

                    <!-- <v-card-text class="text--primary text-center">
                      <div>{{ item.product_description }}</div>
                    </v-card-text> -->

                    <div class="text-center">
                      <router-link :to="{ name: 'Product', query: { product_id: item.product_id } }">
                        <v-btn class="ma-2" outlined color="info"> 查看商品 </v-btn>
                      </router-link>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { apiBanner, apiProductList } from '@/api'
import cartMixin from '@/mixins/cart'

const BASE_API = process.env.BASE_API

export default {
  data() {
    return {
      BASE_API,
      height: 500,
      banner: [],
      products: []
    }
  },
  mixins: [cartMixin],
  created() {
    this.height = Math.min((window.innerWidth / 16) * 9, 600)
    this.apiProductList()
    this.apiBanner()
  },
  methods: {
    async apiProductList() {
      const data = await apiProductList()
      this.products = data.data.product_list
    },
    async apiBanner() {
      const data = await apiBanner()
      this.banner = data.data.png_files
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
