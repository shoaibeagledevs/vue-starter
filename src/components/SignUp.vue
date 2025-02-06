<template>
  <img class="logo" alt="Restutant logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Already have an account? Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
        async  signUp() {
                if (this.name && this.email && this.password) {
                    let result = await axios.post('http://localhost:3000/users', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    });
                    console.log(result);
                    if (result.status === 201) {
                        localStorage.setItem('user-info', JSON.stringify(result.data));
                        this.$router.push({name : 'HomePage'});
                        // this.$router.push('/login');
                    }

                }
            }
    },
    mounted() {
        document.title = "Sign Up";
            let user = localStorage.getItem('user-info');
            if (user) {
                this.$router.push({name : 'HomePage'});
            }
        }
    }
</script>

<style>

</style>