<template>
    <div>
        <h1>{{ pokemon.name }}</h1>
        <p>Price: {{ pokemon.price }}</p>
        <!-- Add more details as needed -->
        <!-- For example, you can display weight, height, image, etc. -->

        <router-link :to="{ name: 'PokemonList' }">Back to Pokemon List</router-link>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pokemon: {}, // Initialize with data from API or props
        };
    },
    // Add lifecycle hooks, computed properties, etc., as needed
};
</script>
  
<style scoped>
/* Add component-specific styles if needed */
</style>
  