<template>
    <div v-if="isLoggedIn" class="user-info">
        <!-- Content to display when logged in -->
        <button @click="logoutUser" class="logout-button">Logout</button>
        <table class="table">
            <!-- Table content for logged-in user -->
        </table>
    </div>
    <div v-else class="login-section">
        <!-- Login form -->
        <h3>Login!</h3>
        <form @submit.prevent="onLogin" class="login-form">
            <label for="loginEmail">Email:</label>
            <input id="loginEmail" class="login-form-input" type="text" v-model="loginEmail" placeholder="Email" />
            <br />
            <label for="loginPassword">Password:</label>
            <input id="loginPassword" class="login-form-input" :type="showPassword ? 'text' : 'password'"
                v-model="loginPassword" placeholder="Password" />
            <input id="showPassword" type="checkbox" v-model="showPassword" />
            <label for="showPassword">Show Password</label>
            <br />
            <div v-if="loginError" class="error-message">{{ loginError }}</div>
            <button type="submit" class="login-form-submit" :disabled="isLoggingIn">
                {{ isLoggingIn ? 'Logging in...' : 'Login' }}
            </button>
        </form>
    </div>
</template>
  
<script>
import "@/store/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "LoginPage",
    computed: {
        ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
    },
    data() {
        return {
            loginEmail: "",
            loginPassword: "",
            showPassword: false,
            loginError: null,
            isLoggingIn: false,
        };
    },
    methods: {
        ...mapActions(["loginUser", "logoutUser"]),
        onLogin(event) {
            event.preventDefault();
            this.loginError = null; // Clear previous errors
            this.isLoggingIn = true; // Set loading state

            let data = {
                user: {
                    email: this.loginEmail,
                    password: this.loginPassword,
                },
            };

            this.loginUser(data)
                .then(() => {
                    this.resetData();
                    // Redirect to home or dashboard after successful login
                    this.$router.push("/");
                })
                .catch((error) => {
                    this.loginError = error.message || "Login failed.";
                })
                .finally(() => {
                    this.isLoggingIn = false; // Reset loading state
                });
        },
        resetData() {
            this.loginEmail = "";
            this.loginPassword = "";
        },
    },
};
</script>
  
<style>
/* Add your styles here */
.error-message {
    color: red;
}
</style>
  