<template>
  <div :class="{'cart': true, 'cart-show': isCartOpen}">
    <div class="cart-header">
      <div class="cart-header-title">Корзина</div>
      <div class="cart-header-close" @click="toggleCartWindow()">закрыть</div>
    </div>
    <div class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-name">{{item.name}}</div>
        <div class="cart-item-quantity">
          <div class="cart-item-btn add-btn" @click="addItemQnt(item.id)">+</div>
          <div class="cart-item-quantity-value">{{item.quantity}}</div>
          <div class="cart-item-btn turn-down-btn" @click="turnDownItemQnt(item.id)">-</div>
        </div>
        <div class="cart-item-price">{{item.price * item.quantity}} руб.</div>
      </div>
    </div>
    <template v-if="cart.length > 0"> 
      <div class="cart-down-line"></div>
      <div class="cart-total-sum"><span>Сумма:</span> {{totalPrice}}  руб.</div>
      <div class="cart-print-btn" @click="print()">Распечатать позиции</div>
    </template>
    <template v-else>Корзина пуста</template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', {
      cart: 'all',
      isCartOpen: 'isCartOpen',
      totalPrice: 'totalPrice',
    }),
  },
  methods: {
    toggleCartWindow: function(id) {
      return this.$store.dispatch('cart/toggleCartWindow', {id});
    },
    addItemQnt: function(id) {
      return this.$store.dispatch('cart/addItemQuantity', {id});
    },
    turnDownItemQnt: function(id) {
      return this.$store.dispatch('cart/turnDownItemQuantity', {id});
    },
    print: function() {
      window.print();
    }
  }
}
</script>