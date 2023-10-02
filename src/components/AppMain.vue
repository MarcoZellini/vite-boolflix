<script>
import { store } from '../store.js'
import CardList from './CardList.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        CardList,
    },
    created() {
        store.getAllGenres();
    }
}
</script>

<template>
    <main id="app_main">
        <div class="container-sm contents">
            <div class="films">
                <h2 class="section_title text-center w-100">Film</h2>
                <CardList :data-list="store.movieList" />
            </div>
            <div class="series">
                <h2 class="section_title text-center w-100">Series</h2>
                <CardList :data-list="store.seriesList" />
            </div>
        </div>
    </main>
</template>


<style></style>