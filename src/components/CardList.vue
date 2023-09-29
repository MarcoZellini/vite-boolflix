<script>
import { store } from '../store.js'
import CardItem from './CardItem.vue'

export default {
    name: 'CardList',
    data() {
        return {
            store
        }
    },
    props: {
        dataList: Array
    },
    components: {
        CardItem
    }
}
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 film_list"
        v-if="dataList.length > 0">
        <CardItem v-for="item in dataList" :item="item" />
    </div>
    <h3 v-else class="text-center">Non ci sono film! 😞</h3>
</template>


<style></style>