<template>
    <div>
        <h1>Add Money to Wallet</h1>
        <form @submit.prevent="addMoneyToWallet">
            <label for="amount">Amount to Add</label>
            <input v-model="amount" type="text" id="amount" />

            <button type="submit">Add Money</button>
        </form>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            amount: '',
        };
    },
    methods: {
        ...mapActions('user', ['addMoneyToWallet']),
    },
};
</script>
  
<style scoped>
/* Add your component styles here */
</style>
  