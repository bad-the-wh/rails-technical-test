<template>
    <div>
        <h2>Logout</h2>
        <button @click="logout">Logout</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logoutUser'); // Assuming 'logoutUser' is the correct action name
        }
    }
}
</script>

<style></style>
  