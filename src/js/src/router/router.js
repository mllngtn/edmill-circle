import { createRouter, createWebHistory } from 'vue-router';

import Results from '../components/Results.vue';
import Book from '../components/Book.vue';

const routes = [

    { 
        path: '/',
        name: 'Results',
        component: Results
    },
    { 
        path: '/book/:id',
        name: 'Book',
        component: Book
    },

];

const router = createRouter({

    history: createWebHistory(),
    routes: routes,

});

export { router };