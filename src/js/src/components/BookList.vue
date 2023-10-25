<template src='./templates/BookList.html' />

<script setup>

	import { config } from '../config/config.js';

    import { useBookListStore } from '../stores/bookListStore.js';

    import { useFetch } from '../utils/useFetch.js';

    const bookListStore = useBookListStore();

    // request list of all books from api
    useFetch({
        url: config.url,
        queryName: 'books',
        callback: bookListStore.updateBookList,
    });

</script>
