<template src='./templates/Results.html' />

<script setup>

	import { ref, watch } from 'vue';

	import { useResultsStore } from '../stores/resultsStore.js';
	
	const resultsStore = useResultsStore();

</script>
