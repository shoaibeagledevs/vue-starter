<template>
    <HeaderPage />
    <h1>Hello , Welcome on Update Rs Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Resturant Name" v-model="resturant.name">
        <input type="text" placeholder="Enter Contact" v-model="resturant.contact">
        <input type="text" placeholder="Enter Location" v-model="resturant.location">
        <button type="button" v-on:click="UpdateResturant">Update Resturant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "UpdateResturant",
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
        async UpdateResturant() {
            const result = await axios.put('http://localhost:3000/resturants/' + this.$route.params.id, this.resturant);
            console.log(result);
            this.$router.push({name : 'HomePage'});
        }
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name : 'SignUp'});
        }

        // Get Resturant Data
        const result = await axios.get('http://localhost:3000/resturants/' + this.$route.params.id);
        this.resturant = result.data;


    
    }
    
};
</script>