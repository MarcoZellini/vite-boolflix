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
    }
}
</script>

<template>
    <main id="app_main">
        <div class="container-sm contents"
            :class="(store.movieList.length === 0) && (store.seriesList.length === 0) ? 'd-flex' : ''">
            <div class="films" :class="store.movieList.length === 0 ? 'w-50' : ''">
                <h2 class="section_title text-center w-100">Film</h2>
                <CardList :data-list="store.movieList" />
            </div>
            <div class="series" :class="store.seriesList.length === 0 ? 'w-50' : ''">
                <h2 class="section_title text-center w-100">Series</h2>
                <CardList :data-list="store.seriesList" />
            </div>
        </div>
    </main>
</template>


<style></style>