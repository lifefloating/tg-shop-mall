<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
      <v-toolbar-title style="width: 350px">
        <v-img src="/static/logo.svg" style="width: 24px; display: inline-block; vertical-align: middle"></v-img>
        <a href="/" class="white--text" style="text-decoration: none; vertical-align: middle">&nbsp;印度小店</a>
      </v-toolbar-title>
      <v-spacer />
      <v-btn href="/cart" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <v-btn href="/" class="v-btn">
          <span>主页</span>
        </v-btn>
        <v-btn href="/product" class="v-btn">
          <span>产品</span>
        </v-btn>
        <v-btn href="/blog" class="v-btn">
          <span>资讯</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
    <router-view />
    <v-footer :padless="true">
      <v-card flat tile width="100%" class="secondary white--text text-center">
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon class="display-2" size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
          vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>印度小店</strong> </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: null
    }
  },
  created() {
    switch (this.$route.name) {
      case 'Home':
        this.activeBtn = 0
        break
      case 'Product':
        this.activeBtn = 1
        break
      case 'Blog':
        this.activeBtn = 2
        break
      default:
        break
    }
  }
}
</script>
