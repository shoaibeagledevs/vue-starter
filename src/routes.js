import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginUp from './components/LoginUp.vue';
import AddResturant from './components/AddResturant.vue';
import UpdateResturant from './components/UpdateResturant.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path : '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path : '/signup'
    },
    {
        name: 'LoginUp',
        component: LoginUp,
        path : '/login'
    },
    {
        name: 'AddResturant',
        component: AddResturant,
        path : '/addresturant'
    },
    {
        name: 'UpdateResturant',
        component: UpdateResturant,
        path : '/updateResturant/:id'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;