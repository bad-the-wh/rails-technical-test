<template>
    <div>
        <h1>Pokemon List</h1>

        <div v-for="pokemon in pokemonList" :key="pokemon.id">
            <h2>{{ pokemon.name }}</h2>
            <p>Price: {{ pokemon.price }}</p>
            <!-- Add more details as needed -->
            <router-link :to="{ name: 'PokemonShow', params: { id: pokemon.id } }">Show</router-link>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

const BASE_URL = "http://localhost:3000/";

export default {
    data() {
        return {
            pokemonList: [],
        };
    },
    mounted() {
        // Call the function to fetch data when the component is mounted
        this.fetchPokemonList();
    },
    methods: {
        async fetchPokemonList() {
            try {
                // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
                const response = await axios.get(`${BASE_URL}pokemon`);

                // Assuming your backend returns an array of Pokemon objects, update the state
                this.pokemonList = response.data;
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
                // Handle errors or show a message to the user
            }
        },
    },
};
</script>
  
<style scoped>
/* Add component-specific styles if needed */
</style>
  