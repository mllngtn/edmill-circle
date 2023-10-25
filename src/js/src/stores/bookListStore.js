import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookListStore = defineStore('bookListStore', () => {

    const books = ref();
    const loading = ref(true);

    function setLoading(status) {

        loading.value = status;

    }

    function updateBookList(data) {

        books.value = data.books;

        setLoading(false);

    }

    return {
        books,
        loading,
        setLoading,
        updateBookList,
    };

});
