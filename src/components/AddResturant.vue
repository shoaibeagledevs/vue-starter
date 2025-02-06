<template>
    <HeaderPage />
    <h1>Hello , Welcome on Add Rs Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Resturant Name" v-model="resturant.name">
        <input type="text" placeholder="Enter Contact" v-model="resturant.contact">
        <input type="text" placeholder="Enter Location" v-model="resturant.location">
        <button type="button" v-on:click="addResturant">Add Resturant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "AddResturant",
    components: {
        HeaderPage
    },
    data() {
        return {
            resturant : {
                name: '',
                contact: '',
                location: ''
            }
        }
    },
    methods: {
        async addResturant() {
            if (this.resturant.name && this.resturant.contact && this.resturant.location) {
                let result = await axios.post('http://localhost:3000/resturants', this.resturant);
                console.log(result);
                if (result.status === 201) {
                    this.$router.push({name : 'HomePage'});
                }
            }
        }
    },
    mounted() {
        document.title = "Add Resturant";
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name : 'SignUp'});
        }
    }
    
};
</script>