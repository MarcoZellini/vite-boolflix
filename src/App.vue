<script>
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
}

</script>

<template>
  <header id="app_header">
    <div id="search_bar" class="container">
      <h1 class="title">boolflix</h1>
      <form class="d-flex justify-content-center align-items-center">
        <input class="text-center" type="text" v-model="store.inputQuery" placeholder="Cerca...">
        <button type="submit" @click.prevent="store.fetchData" placeholder="Cerca Titolo">Search</button>
      </form>
    </div>
  </header>

  <main id="app_main">
    <div class="container-sm contents">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 film_list"
        v-if="store.movieList.length > 0">
        <h2 class="section_title text-center w-100">Films</h2>
        <div class="col" v-for="movie in store.movieList">
          <div class="card">
            <img :src="movie.image" alt="">
            <div class="info">
              <div><strong>Title: </strong>{{ movie.title }}</div>
              <div><strong>Original Title: </strong>{{ movie.originalTitle }}</div>
              <div>
                <img :src="movie.countryFlag">
                <strong>{{ movie.language }}</strong>
              </div>
              <div>
                <i v-for="n in movie.vote" class="fa fa-star"></i>
                <i v-for="n in (5 - movie.vote)" class="fa fa-star-o"></i>
              </div>
              <div v-if="movie.overview !== ''"><strong>Overview: </strong>{{ movie.overview }}</div>
              <div v-else><strong>Overview: </strong> Overview unavailable</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">Non ci sono film! 😞</div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 series_list"
        v-if="store.seriesList.length > 0">
        <h2 class="section_title text-center w-100">Series</h2>

        <div class="col" v-for="series in store.seriesList">
          <div class="card">
            <img :src="series.image" alt="">
            <div class="info">
              <div><strong>Title: </strong>{{ series.title }}</div>
              <div><strong>Original Title: </strong>{{ series.originalTitle }}</div>
              <div>
                <img :src="series.countryFlag">
                {{ series.language }}
              </div>
              <div>
                <i v-for="n in series.vote" class="fa fa-star"></i>
              </div>
              <div v-if="series.overview !== ''">{{ series.overview }}</div>
              <div v-else><strong>Overview: </strong> Overview unavailable</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">Non ci sono serie! 😞</div>
    </div>
  </main>
</template>

<style></style>