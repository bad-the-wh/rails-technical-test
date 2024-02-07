import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PokemonListPage from '@/views/pokemons/PokemonListPage.vue';
import PokemonShowPage from '@/views/pokemons/PokemonShowPage.vue';
import PokemonCheckoutPage from '@/views/pokemons/PokemonCheckoutPage.vue';
import UserAddMoney from '@/views/UserAddMoney.vue';
import UserTransactions from '@/views/UserTransactions.vue';
import Logout from '@/views/Login.vue';
import Login from '@/views/Logout.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/pokemon', component: PokemonListPage },
  { path: '/pokemon/:id', component: PokemonShowPage },
  { path: '/pokemon/:id/checkout', component: PokemonCheckoutPage },
  { path: '/me/add', component: UserAddMoney },
  { path: '/me/transactions', component: UserTransactions },    
  { path: '/login', name: 'Login', component: Login },
  { path: '/logout', name: 'Logout', component: Logout },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
