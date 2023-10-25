<template src='./templates/BookList.html' />

<script setup>

	import { config } from '../config/config.js';

    import { useResultsStore } from '../stores/resultsStore.js';

    import { useFetch } from '../utils/useFetch.js';

    const resultsStore = useResultsStore();

    // request list of all books from api
    useFetch({
        url: config.url,
        queryName: 'books',
        callback: resultsStore.updateResults,
    });

</script>
