import { reactive } from 'vue';
import axios from '../node_modules/axios'

export const store = reactive({
    // baseMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    // apiKey: 'b5d1c2545fd5913c018a04b6cd2e056a',
    // movieTitle: 'ritorno',
    movieReqest: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'b5d1c2545fd5913c018a04b6cd2e056a',
            query: ''
        }
    },


    fetchMovies() {
        axios
            .request(this.movieReqest)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.error(error);
            });
    }




})