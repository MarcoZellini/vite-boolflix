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
      <input type="text" v-model="store.movieRequest.params.query">
      <button type="submit" @click.prevent="store.fetchMovies" placeholder="Cerca Titolo">Search</button>
    </form>
  </div>
  <div class="contents">
    <ul v-if="store.movieList.length > 0">
      <li v-for="movie in store.movieList">
        <ol>
          <li>{{ movie.title }}</li>
          <li>{{ movie.originalTitle }}</li>
          <li>{{ movie.language }}</li>
          <li>{{ movie.vote }}</li>
        </ol>
      </li>
    </ul>
    <div v-else>Non ci sono film! 😞</div>
  </div>
</template>

<style></style>