<template src='./templates/BookSingle.html' />

<script setup>

    import { useRoute } from 'vue-router';

	import { ref } from 'vue';

	import { config } from '../config/config.js';

    import { useFetch } from '../utils/useFetch.js';
    import { usePost } from '../utils/usePost.js';

    const route = useRoute();
    const book = ref();

    // set book details with data returned from api call
    function setBookValue(data) {

        if (data.book) {
            book.value = data.book;
        }

    }

    // call api to fetch book data
    function fetchBook() {

        // fetch book
        useFetch({
            url: config.url + '/' + route.params.id,
            queryName: 'book-' + route.params.id,
            callback: setBookValue,
        });

    }
    
    // fetch book on component load
    fetchBook();

    // display alert message after purchase request
    function hasPurchasedBook(data) {

        if (data.message) {

            if (!alert(data.message)) { // eslint-disable-line no-alert

                fetchBook();

            }

            return;
        }

        alert('Sorry, something has gone wrong'); // eslint-disable-line no-alert

    }

    // call api to purchase book
    function purchaseBook() { // eslint-disable-line no-unused-vars

        usePost({
            url: config.url + '/' + route.params.id + '/purchase',
            callback: hasPurchasedBook,
        });

    }

</script>
