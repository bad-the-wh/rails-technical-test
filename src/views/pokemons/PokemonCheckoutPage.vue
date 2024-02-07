<template>
    <div>
        <h1>Checkout</h1>

        <template v-if="pokemon.user === currentUser">
            <p>You already own this Pokemon.</p>
        </template>

        <template v-else>
            <form @submit.prevent="checkoutPokemon">
                <!-- Display Pokemon details -->
                <p>Name: {{ pokemon.name }}</p>
                <p>Price: {{ pokemon.price }}</p>
                <!-- Add any other relevant details -->

                <!-- Add hidden field to specify the action -->
                <input type="hidden" name="action" value="buy">

                <!-- Add any additional form fields if needed -->

                <!-- Add form submit button -->
                <button type="submit">Buy Pokemon</button>
            </form>
        </template>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pokemon: {}, // Initialize with data from API or props
            currentUser: {}, // Initialize with current user data from API or props
        };
    },
    methods: {
        checkoutPokemon() {
            // Handle the checkout logic here
            // You may want to make an API request to perform the checkout
        },
    },
    // Add lifecycle hooks, computed properties, etc., as needed
};
</script>
  
<style scoped>
/* Add component-specific styles if needed */
</style>
  