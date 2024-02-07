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
export default {
    data() {
        return {
            pokemonList: [], // Initialize with data from API or props
        };
    },
    // Add lifecycle hooks, computed properties, etc., as needed
};
</script>
  
<style scoped>
/* Add component-specific styles if needed */
</style>
  