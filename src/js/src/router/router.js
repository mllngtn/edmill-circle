import { createRouter, createWebHistory } from 'vue-router';

import BookList from '../components/BookList.vue';
import BookSingle from '../components/BookSingle.vue';

const routes = [

    { 
        path: '/',
        name: 'BookList',
        component: BookList
    },
    { 
        path: '/book/:id',
        name: 'BookSingle',
        component: BookSingle
    },

];

const router = createRouter({

    history: createWebHistory(),
    routes: routes,

});

export { router };