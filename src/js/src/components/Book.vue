<template src='./templates/Book.html' />

<script setup>

	import { ref } from 'vue';
	import { useRoute } from 'vue-router';

	import { config } from '../config/config.js';

    import { useFetch } from '../utils/useFetch.js';
    import { usePost } from '../utils/usePost.js';

    const route = useRoute();
    const book = ref();

    function fetchBook() {

        // fetch book
        useFetch({
            url: config.url + '/' + route.params.id,
            queryName: 'book-' + route.params.id,
            callback: function setBookValue(data){
                book.value = data.book;
            },
        });

    }
    
    // fetch book on component load
    fetchBook();

    // purchase book
    const purchaseBook = function() {

        usePost({
            url: config.url + '/' + route.params.id + '/purchase',
            callback: function bookHasBeenPurchased(data){
                if (data.message) {

                    if (!alert(data.message)) {

                        fetchBook();

                    }

                    return;
                }

                alert('Sorry, something has gone wrong');
                
            },
        });

    }

</script>
