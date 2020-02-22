<template>
    <div class="App">
      <Cart />
      <Header/>
      <router-view>
        <ShopWindow/>
      </router-view>
      <div :class="{'shadow': isCartOpen()}" @click="toggleCartWindow()" ></div>
    </div>
</template>

<script>
  import Header from './Header';
  import ShopWindow from './ShopWindow';
  import Cart from './Cart';

  export default {
    components: {
      Header,
      ShopWindow,
      Cart,
    },
    methods: {
      toggleCartWindow: function() {
        return this.$store.dispatch('cart/toggleCartWindow');
      },
      isCartOpen: function() {
        return this.$store.getters['cart/isCartOpen'];
      }
    }
  }
</script>