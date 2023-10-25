<template src='./templates/BookSingle.html' />

<script setup>

    import { useRoute } from 'vue-router';

	import { ref } from 'vue';

	import { config } from '../config/config.js';
    import { useFetch } from '../utils/useFetch.js';
    import { usePost } from '../utils/usePost.js';

    const route = useRoute();

    const book = ref();
    const isPurchasing = ref(false);

    // use given book data to set book details
    function setBookValue(data) {

        if (data.book) {
            book.value = data.book;
        }

        isPurchasing.value = false;

    }

    // call api to fetch book data
    function fetchBook() {

        useFetch({
            url: config.url + '/' + route.params.id,
            queryName: 'book-' + route.params.id,
            callback: setBookValue,
        });

    }
    
    // fetch book data on component load
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

    // call api with purchase request
    function purchaseBook() { // eslint-disable-line no-unused-vars

        isPurchasing.value = true;

        usePost({
            url: config.url + '/' + route.params.id + '/purchase',
            callback: hasPurchasedBook,
        });

    }

</script>
