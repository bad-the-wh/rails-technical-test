<template>
    <div>
        <h1>User Transactions</h1>
        <div v-for="transaction in userTransactions" :key="transaction.id">
            <p><strong>Action:</strong> {{ transaction.action }}</p>
            <p><strong>Pokemon:</strong> {{ transaction.pokemon.name }}</p>
            <p><strong>Created At:</strong> {{ transaction.created_at }}</p>
            <hr>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUserTransactions']),
    },
    created() {
        // Fetch user transactions when the component is created
        // You may dispatch an action to Vuex to retrieve the transactions from your backend
        // For example:
        // this.$store.dispatch('user/fetchUserTransactions');
    },
};
</script>
  
<style scoped>
/* Add your component styles here */
</style>
  