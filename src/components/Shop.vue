<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>筛选</v-card-title>
            <v-divider></v-divider>
            <v-col cols="12">
              <v-text-field v-model="keyword" label="搜索关键词" outlined dense></v-text-field>
            </v-col>
            <!-- <template>
              <v-treeview :items="items" :open="[1]" :active="[5]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider v-model="range" :max="max" :min="min" :height="10" class="align-center" dense></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field :value="range[0]" label="Min" outlined dense @change="$set(range, 0, $event)"></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field :value="range[1]" label="Max" outlined dense @change="$set(range, 1, $event)"></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox append-icon="mdi-star" label="4 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="3 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="2 & above" hide-details dense></v-checkbox>
              <v-checkbox append-icon="mdi-star" label="1 & above" hide-details dense></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Size</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="XS" hide-details dense></v-checkbox>
              <v-checkbox label="S" hide-details dense></v-checkbox>
              <v-checkbox label="M" hide-details dense></v-checkbox>
              <v-checkbox label="L" hide-details dense></v-checkbox>
              <v-checkbox label="XL" hide-details dense></v-checkbox>
              <v-checkbox label="XXL" hide-details dense></v-checkbox>
              <v-checkbox label="XXXL" hide-details dense></v-checkbox>
            </v-container> -->
            <v-col cols="12" align="right">
              <v-btn color="primary" raised @click="apiProductSearch">确认</v-btn>
            </v-col>
          </v-card>
        </div>

        <div class="col-md-9 col-sm-9 col-xs-12">
          <!-- <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs> -->

          <!-- <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Showing 1-12 of 200 products</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px" outlined dense></v-select>
            </v-col>
          </v-row> -->

          <!-- <v-divider></v-divider> -->
          <v-card :loading="loading">
            <div class="row text-center ma-0">
              <div class="col-md-3 col-sm-6 col-xs-12" :key="index" v-for="(item, index) in products">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img
                      class="white--text align-end"
                      :aspect-ratio="16 / 9"
                      height="200px"
                      :src="`data:image/jpg;base64,${item.product_image[0]}`"
                    >
                      <v-card-title>{{ item.product_name }} </v-card-title>
                      <v-expand-transition>
                        <router-link
                          v-if="hover"
                          :to="{ name: 'Product', query: { product_id: item.product_id } }"
                          class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%"
                        >
                          <v-btn v-if="hover" class="" outlined>查看</v-btn>
                        </router-link>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="text--primary">
                      <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{ item.product_name }}</div>
                      <div>￥{{ item.product_price }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>

            <!-- <div class="text-center mt-12">
                      <v-pagination v-model="page" :length="6"></v-pagination>
                    </div> -->
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
<script>
import { apiProductSearch } from '@/api'
import cartMixin from '@/mixins/cart'

export default {
  data: () => ({
    keyword: '',
    range: [0, 10000],
    select: 'Popularity',
    options: ['Default', 'Popularity', 'Relevance', 'Price: Low to High', 'Price: High to Low'],
    page: 1,
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
    ],
    min: 0,
    max: 10000,
    items: [
      {
        id: 2,
        name: 'Shoes',
        children: [
          { id: 2, name: 'Casuals' },
          { id: 3, name: 'Formals' },
          { id: 4, name: 'Sneakers' }
        ]
      },
      {
        id: 1,
        name: 'Clothing',
        children: [
          { id: 5, name: 'Shirts' },
          { id: 6, name: 'Tops' },
          { id: 7, name: 'Tunics' },
          { id: 8, name: 'Bodysuit' }
        ]
      }
    ],
    products: [],
    loading: false
  }),
  mixins: [cartMixin],
  created() {
    this.apiProductSearch()
  },
  methods: {
    async apiProductSearch() {
      this.loading = true
      try {
        const data = await apiProductSearch({ keyword: this.keyword })
        this.products = data.data.product_list
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
