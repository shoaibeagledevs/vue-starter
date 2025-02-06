<template>
    <HeaderPage />
<h1>Hello {{ name }}, Welcome on Home Page</h1>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Resturant Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Action</th>
    </tr>
    <tr v-for="resturant in resturants" :key="resturant.id">
        <td>{{ resturant.id }}</td>
        <td>{{ resturant.name }}</td>
        <td>{{ resturant.contact }}</td>
        <td>{{ resturant.location }}</td>
        <td>
            <router-link :to="{name: 'UpdateResturant', params: {id: resturant.id}}">Edit</router-link>
            <button v-on:click="deleteResturant(resturant.id)">Delete</button>
        </td>
    </tr>
</table>
</template>
<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            resturants: [],
        }
    },
    components: {
        HeaderPage
    },
    methods: {
        async deleteResturant(id) {
            if (confirm('Are you sure?')) {
                const result = await axios.delete('http://localhost:3000/resturants/' + id);
                console.log(result);
                if (result.status === 200) {
                    this.getResturants();
                }
            }
        },
        async getResturants(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({name : 'SignUp'});
            }

            let result = await axios.get('http://localhost:3000/resturants');
            this.resturants = result.data;
        }
    },
    async mounted() {
        document.title = "Home";
        this.getResturants();
    }
    
};
</script>

<style>
/* Table Styling */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Table Header */
th {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    padding: 12px;
    text-align: center;  /* Center header text */
}

/* Table Rows */
td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    text-align: center;  /* Center table data */
}

/* Hover Effect */
tr:hover {
    background-color: #f8f9fa;
}

/* Action Buttons */
td a, td button {
    padding: 6px 12px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
}

/* Edit Button */
td a {
    background-color: #28a745;
    color: white;
}

/* Delete Button */
td button {
    background-color: #dc3545;
    color: white;
}

td a:hover {
    background-color: #218838;
}

td button:hover {
    background-color: #c82333;
}
</style>

