<template>
  <div class="shop-window">
    <div :class="{'shop-window-btn': true, 'hidden': isBtnHid}" @click="this.shiftSliderLeft"><i class="arrow arrow-left" /></div>
    <div class="shop-window-content">
      <router-link :to="getPathToGoodsPage(product.id)"
        v-for="product in products"
        v-bind:key="product.id">
        <div class="goods">
          <div class="goods-image">
            <img :src="getCoverPath(product.cover)" alt="Фото сломалось(" />
          </div>
          <div class="goods-description">
            <div class="goods-name">{{product.name}}</div>
            <div class="goods-price">{{product.price}} руб.</div>
          </div>
        </div>
      </router-link>
    </div>
  <div :class="{'shop-window-btn': true, 'hidden': isBtnHid}" @click="this.shiftSliderRight"><i class="arrow arrow-right"></i></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters('products', {
      products: 'slider',
    }),
  },
  methods: {
    getCoverPath: function(id) { 
      return `images/pictures/${id}.jpg`
    },
    getPathToGoodsPage: function(id) {
      return `/goods/${id}`;
    },
    shiftSliderLeft: function() {
      this.$store.dispatch('products/shiftLeft');
    },
    shiftSliderRight: function() {
      this.$store.dispatch('products/shiftRight');
    }
  },
  created() {
    this.$store.dispatch('products/fill');
    this.isBtnHid = this.products.length <= 3;
  }
}
</script>