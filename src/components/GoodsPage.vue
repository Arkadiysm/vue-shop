<template>
  <div class="goods-page">
    <div>
      <router-link to="/"><div class="goods-page-back-btn">← назад</div></router-link>
      <div class="goods-page-image">
        <img :src="this.getImgPath(this.product.cover)" alt="Фото сломалоось(" />
      </div>
    </div>
    <div class="goods-page-description-wrapper">
      <div class="goods-page-name">{{this.product.name}}</div>
      <div class="goods-page-description">{{this.product.description}}</div>
      <div class="goods-page-price">{{this.product.price}} руб.</div>
      <div class="goods-page-buy-btn" @click="addToCart">Добавить в корзину</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters('products', {
      getProductById: 'byId', 
    }),
  },
  methods: {
    getImgPath: (cover) => {
      return `images/pictures/${cover}.jpg`;
    },
    addToCart: function() {
      this.$store.dispatch('cart/addItemQuantity', {...this.product});
    },
  },
  beforeMount() {
    const id = this.$route.params.id;
    this.product = this.getProductById(id);
    if (this.product === undefined) return this.$router.push('/');
  }
}

</script>