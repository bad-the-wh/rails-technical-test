<template>
    <div>
        <h1>{{ pokemon.name }}</h1>
        <p>Price: {{ pokemon.price }}</p>
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Height: {{ pokemon.height }}</p>
        <!-- Add more details as needed -->
        <!-- For example, you can display weight, height, image, etc. -->
        <router-link :to="{ name: 'PokemonCheckout' }">Proceed to Checkout</router-link>

        <router-link :to="{ name: 'PokemonList' }">Back to Pokemon List</router-link>
    </div>
</template>
  
<script>
import axios from 'axios';

const BASE_URL = "http://localhost:3000/";

export default {
    data() {
        return {
            pokemon: {}, // Initialize with an empty object
        };
    },
    created() {
        // Fetch data from the backend API based on the route parameter (id)
        this.fetchPokemonData();
    },
    methods: {
        async fetchPokemonData() {
            try {
                // Get the "id" parameter from the route
                const pokemonId = this.$route.params.id;

                // Make a GET request to the backend API endpoint for the specific Pokemon
                const response = await axios.get(`${BASE_URL}pokemon/${pokemonId}`);

                // Update the component's data with the received Pokemon data
                this.pokemon = response.data;

            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                // Handle errors or show a message to the user
            }
        },
    },
    // Add computed properties, etc., as needed
};
</script>
  
<style scoped>
/* Add component-specific styles if needed */
</style>
  