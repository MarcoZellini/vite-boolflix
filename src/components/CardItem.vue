<script>

export default {
    name: 'CardItem',
    props: {
        item: Object
    }
}

</script>

<template>
    <div class="col">
        <div class="card">
            <img class="poster" :src="item.image" v-if="item.image !== 'https://image.tmdb.org/t/p/w342/null'">
            <div class="alt-poster" v-else>404 image not found</div>
            <div class="info">
                <div><strong>Title: </strong>{{ item.title }}</div>
                <div><strong>Original Title: </strong>{{ item.originalTitle }}</div>
                <div>
                    <img :src="item.countryFlag">
                    <strong>{{ item.language }}</strong>
                </div>
                <div>
                    <i v-for="n in item.vote" class="fa fa-star"></i>
                    <i v-for="n in (5 - item.vote)" class="fa fa-star-o"></i>
                </div>
                <div v-if="item.cast != ''"><strong>Cast: </strong> {{ item.cast }}</div>
                <div v-else><strong>Cast: </strong>Member not found</div>
                <div v-if="item.genres != ''"><strong>Genres: </strong> {{ item.genres }}</div>
                <div v-else><strong>genres: </strong>Genres not found</div>
                <div v-if="item.overview !== ''"><strong>Overview: </strong>{{ item.overview }}</div>
                <div v-else><strong>Overview: </strong> Overview unavailable</div>
            </div>
        </div>
    </div>
</template>

<style></style>