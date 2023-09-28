<script>
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
  created() {
    store.movieReqest.params.query = 'ritorno'
    store.fetchMovies();
  }
}

</script>

<template></template>

<style></style>