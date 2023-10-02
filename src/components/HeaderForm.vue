<script>
import { store } from '../store.js'

export default {
    name: 'HeaderForm',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <form class="d-flex justify-content-center align-items-center">
        <select class="filters" v-model="store.inputGenre" @change="store.fetchData">
            <option value="" disabled selected>Filters..</option>
            <option value="">All</option>
            <option v-for="genre in store.genreList" :value="genre.id">{{ genre.name }}</option>
        </select>
        <input class="text-center" type="text" v-model="store.inputQuery" placeholder="Cerca...">
        <button type="submit" @click.prevent="store.fetchData" placeholder="Cerca Titolo">Search</button>
    </form>
</template>

<style></style>