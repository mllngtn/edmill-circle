<template src='./templates/Results.html' />

<script setup>

	import { config } from '../config/config.js';

    import { useResultsStore } from '../stores/resultsStore.js';

    const resultsStore = useResultsStore();

    import { useFetch } from '../utils/useFetch.js';

    // grab initial results
    useFetch({
        url: config.url,
        queryName: 'books',
        callback: resultsStore.updateResults,
    });

</script>
