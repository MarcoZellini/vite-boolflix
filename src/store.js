import { reactive } from 'vue';
import axios from '../node_modules/axios'

export const store = reactive({
    movieRequest: { //this Object is used to make AJAX Calls to get our movie list
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'b5d1c2545fd5913c018a04b6cd2e056a',
            query: ''
        }
    },
    movieList: [], //list of movies

    /**
     * ### fetchMovies
     * > This function does an AJAX Call to get a movie list bases on a research.
     */
    fetchMovies() {
        if (this.movieRequest.params.query !== '') {
            axios
                .request(this.movieRequest)
                .then((response) => {

                    /* console.log(response);
                    console.log(response.data.results[0]); */

                    response.data.results.forEach(element => {
                        this.movieList.push({
                            title: element.title,
                            originalTitle: element.original_title,
                            language: element.original_language,
                            vote: element.vote_average
                        })
                    });

                    console.log(this.movieList);

                }).catch((error) => {
                    console.error(error);
                });
        }
    }




})