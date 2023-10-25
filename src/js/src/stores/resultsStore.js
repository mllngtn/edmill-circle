import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useResultsStore = defineStore('results', () => {

    const books = ref();
    const loading = ref(true);

    function setLoading(status) {

        loading.value = status;

    }

    function updateResults(data) {

        books.value = data.books;

        setLoading(false);

    }

    return {
        books,
        loading,
        setLoading,
        updateResults,
    };

});
