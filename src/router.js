import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import HomePage from '@/views/HomePage.vue';
import PokemonList from '@/views/pokemons/PokemonList.vue';
import PokemonShow from '@/views/pokemons/PokemonShow.vue';
import PokemonCheckout from '@/views/pokemons/PokemonCheckout.vue';
import UserAddMoney from '@/views/users/UserAddMoney.vue';
import UserTransactions from '@/views/users/UserTransactions.vue';
import UserShow from '@/views/users/UserShow.vue';
import Login from '@/components/LoginPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/pokemon', name: 'PokemonList', component: PokemonList },
  { path: '/pokemon/:id', name: 'PokemonShow', component: PokemonShow },
  { path: '/pokemon/:id/checkout', name: 'PokemonCheckout', component: PokemonCheckout, meta: { requiresAuth: true } },
  { path: '/me/add', name: 'UserAddMoney', component: UserAddMoney, meta: { requiresAuth: true } },
  { path: '/me', name:'UserShow', component: UserShow, meta: { requiresAuth: true } },
  { path: '/me/transactions', name: 'UserTransactions', component: UserTransactions, meta: { requiresAuth: true } },    
  { path: '/login', name: 'Login', component: Login },
  { path: '/:catchAll(.*)', redirect: '/' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    console.log(to.meta.requiresAuth, store.getters.isLoggedIn);
    if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
      console.log('User not authenticated. Redirecting to login.');
      next({ name: 'Login', query: { redirect: to.fullPath } });
    } else {
      console.log('User authenticated or route does not require authentication. Proceeding.');
      next();
    }
  });

export default router;
