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
        <input class="text-center" type="text" v-model="store.inputQuery" placeholder="Cerca...">
        <button type="submit" @click.prevent="store.fetchData" placeholder="Cerca Titolo">Search</button>
    </form>
</template>

<style></style>