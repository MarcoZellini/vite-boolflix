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
  <div id="search_bar">
    <form>
      <label>Inserisci il titolo del film</label><br>
      <input type="text" v-model="store.inputQuery">
      <button type="submit" @click.prevent="store.fetchData" placeholder="Cerca Titolo">Search</button>
    </form>
  </div>
  <div class="contents">

    <div class="film_list">
      <h2>Films</h2>
      <ul v-if="store.movieList.length > 0">
        <li v-for="movie in store.movieList">
          <ol>
            <li>
              <img :src="movie.image" alt="">
            </li>
            <li>{{ movie.title }}</li>
            <li>{{ movie.originalTitle }}</li>
            <li>
              <img :src="movie.countryFlag">
              {{ movie.language }}
            </li>
            <li>
              <i v-for="n in movie.vote" class="fa fa-star"></i>
            </li>
          </ol>
        </li>
      </ul>
      <div v-else>Non ci sono film! 😞</div>
    </div>

    <div class="series_list">
      <h2>Series</h2>
      <ul v-if="store.seriesList.length > 0">
        <li v-for="movie in store.seriesList">
          <ol>
            <li>
              <img :src="movie.image" alt="">
            </li>
            <li>{{ movie.title }}</li>
            <li>{{ movie.originalTitle }}</li>
            <li>
              <img :src="movie.countryFlag">
              {{ movie.language }}
            </li>
            <li>
              <i v-for="n in movie.vote" class="fa fa-star"></i>
            </li>
          </ol>
        </li>
      </ul>
      <div v-else>Non ci sono serie! 😞</div>
    </div>
  </div>
</template>

<style></style>