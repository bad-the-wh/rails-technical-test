<!-- src/views/UserShow.vue -->

<template>
    <div>
        <h1>User Profile</h1>
        <p>Email: {{ user.email }}</p>
        <!-- Add more details as needed -->
    </div>
</template>
  
<script>
//const BASE_URL = "http://localhost:3000/";

export default {
    data() {
        return {
            user: null,
        };
    },
    mounted() {
        // Fetch user data when the component is mounted
        this.fetchUserData();
    },
    methods: {
        async fetchUserData() {
            try {
                // Make an API request to get user data
                const response = await this.$axios.get('/users/show');
                this.user = response.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
    },
};
</script>
<style scoped></style>  