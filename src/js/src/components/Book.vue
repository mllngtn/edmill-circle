<template src='./templates/Book.html' />

<script setup>

	import { ref } from 'vue';
	import { useRoute } from 'vue-router';

	import { config } from '../config/config.js';

    import { useFetch } from '../utils/useFetch.js';

    const route = useRoute();
    const book = ref();

    // grab initial results
    useFetch({
        url: config.url + '/' + route.params.id,
        queryName: 'book-' + route.params.id,
        callback: function setBookValue(data){
        	book.value = data.book;
        },
    });

</script>
