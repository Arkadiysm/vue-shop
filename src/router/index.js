import Vue from 'vue';
import Router from 'vue-router';
import ShopWindow from '../components/ShopWindow';
import GoodsPage from '../components/GoodsPage';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '',
      name: 'Pretty shop',
      component: ShopWindow,
    },
    {
      path: '/goods/:id',
      name: '',
      component: GoodsPage,
    }
  ]
});