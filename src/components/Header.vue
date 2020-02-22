<template>
  <div class="header">
      <div class="logo">
        <router-link to="/"><span class="main-logo">Наш уютный магазин</span></router-link>
      </div>
      <div class="cart-ico">
        <div @click="toggleCartWindow()" class="link-to-cart">
          <img src='images/shopping-cart.svg' alt="logo" />
          <span>корзина</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    toggleCartWindow: function() {
      return this.$store.dispatch('cart/toggleCartWindow');
    }
  }
}
</script>