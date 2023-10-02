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
                <div class="item_title"><strong>Title: </strong>{{ item.title }}</div>
                <div class="item_original_title"><strong>Original Title: </strong>{{ item.originalTitle }}</div>
                <div class="item_country_flag">
                    <img :src="item.countryFlag">
                    <strong>{{ item.language }}</strong>
                </div>
                <div class="item_vote">
                    <i v-for="n in item.vote" class="fa fa-star"></i>
                    <i v-for="n in (5 - item.vote)" class="fa fa-star-o"></i>
                </div>

                <div class="item_cast" v-if="item.cast != ''">
                    <strong>Cast: </strong>
                    <template v-for="(actor, i) in item.cast">
                        <span v-if="i < item.cast.length">{{ `${actor}, ` }}</span>
                        <span v-else>{{ actor }}</span>
                    </template>
                </div>
                <div class="item_cast" v-else><strong>Cast: </strong>Member not found</div>

                <div class="item_genres" v-if="item.genres.length > 0">
                    <strong>Genres: </strong>
                    <template v-for="(genre, i) in item.genres">
                        <span v-if="i < item.genres.length">{{ `${genre.name}, ` }}</span>
                        <span>{{ genre.name }}</span>
                    </template>
                </div>
                <div class="item_genres" v-else><strong>genres: </strong>Genres not found</div>

                <div class="item_overview" v-if="item.overview !== ''"><strong>Overview: </strong>{{ item.overview }}</div>
                <div class="item_overview" v-else><strong>Overview: </strong> Overview unavailable</div>
            </div>
        </div>
    </div>
</template>

<style></style>