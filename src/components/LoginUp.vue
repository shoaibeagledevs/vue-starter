<template>
    <img class="logo" alt="Restutant logo" src="../assets/logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/signup">Don't have an account? Sign Up</router-link>
        </p>
    </div>
</template>

<script>
 import axios from 'axios';
    export default {
        name: 'LoginUp',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login() {
                if (this.email && this.password) {
                    let result = await axios.get('http://localhost:3000/users?email=' + this.email + '&password=' + this.password);

                    if (result.status === 200 && result.data.length > 0) {
                        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                        this.$router.push({name : 'HomePage'});
                    }
                }
            }
        },
        mounted() {
            document.title = "Login";
            let user = localStorage.getItem('user-info');
            if (user) {
                this.$router.push({name : 'HomePage'});
            }
        }
    }
</script>