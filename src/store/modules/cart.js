const state = {
  cart: [],
  isCartOpen: false,
};

const getters = {
  all: (state) => {
    return state.cart;
  },
  isCartOpen: (state) => {
    return state.isCartOpen;
  },
  totalPrice: (state) => {
    const {cart} = state;
    return cart.reduce((sum, item) => ( (item.price * item.quantity) + sum), 0);
  }
};

const mutations = {
  addItemToCart: (state, {item}) => {
    const { cart } = state; 
    state.cart = [...cart, {...item, quantity: 1}];
  },
  removeItem: (state, {id}) => {
    const { cart } = state;
    state.cart = cart.filter( (item) => item.id !== id );
  },
  addItemQuantity: (state, {id}) => {
    const { cart } = state;
    state.cart = cart.map( (item) => item.id === id ? {...item, quantity: item.quantity + 1}: item );
  },
  turnDownItemQuantity: (state, {id}) => {
    const { cart } = state;
    const newCart = cart.map( (item) => item.id === id ? {...item, quantity: item.quantity - 1}: item );
    state.cart = newCart.filter( (item) => item.quantity > 0 );
  },
  openCart: (state) => {
    state.isCartOpen = true;
  },
  closeCart: (state) => {
    state.isCartOpen = false;
  },
};

const actions = {
  addItemQuantity: ({commit, state}, item) => {
    const isItemInCart = state.cart.filter( (p) => p.id === item.id ).length === 1;
    if ( isItemInCart ) commit('addItemQuantity', {id: item.id});
    else commit('addItemToCart', {item});
  },
  turnDownItemQuantity: ({commit, state}, {id}) => {
    const itemQuantity = state.cart.filter( (p) => p.id === id )[0].quantity;
    if ( itemQuantity === 1 ) commit('removeItem', {id});
    else commit('turnDownItemQuantity', {id});
  },
  toggleCartWindow: ({commit, state}) => {
    const { isCartOpen } = state;
    if ( isCartOpen ) commit('closeCart');
    else commit('openCart');
  }
};



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}