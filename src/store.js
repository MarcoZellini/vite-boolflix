import { reactive } from 'vue';
import axios from '../node_modules/axios'
import { countryCodes } from './countryCodes.js'

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/search/',
    api_key: 'b5d1c2545fd5913c018a04b6cd2e056a', //we need this to make AJAX request
    inputQuery: null, //query
    movieList: [], //list of movies found,
    seriesList: [], //list of series found,

    /**
     * ### fetchData
     * > This function calls fetchMovies and fetchSeries functions
     */
    fetchData() {
        this.fetchMovies();
        this.fetchSeries();
    },


    /**
     * ### fetchMovies
     * > This function does an AJAX Call to get a movie list bases on a inputQuery.
     */
    fetchMovies() {
        axios
            .request({
                method: 'GET',
                url: this.baseUrl + 'movie',
                params: {
                    api_key: this.api_key,
                    query: this.inputQuery
                }
            })
            .then((response) => {
                console.log(response.data.results[0]);
                this.movieList = [];

                response.data.results.forEach(element => {
                    this.movieList.push({
                        image: 'https://image.tmdb.org/t/p/w342/' + element.poster_path,
                        title: element.title,
                        originalTitle: element.original_title,
                        language: element.original_language.toUpperCase(),
                        countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                        vote: Math.ceil(element.vote_average / 2)
                    })
                });

            }).catch((error) => {
                console.error(error);
            });
    },

    /**
     * ### fetchMovies
     * > This function does an AJAX Call to get a series list bases on a inputQuery.
     */
    fetchSeries() {

        axios
            .request({
                method: 'GET', //this Object is used to make AJAX Calls to get our series list
                url: this.baseUrl + 'tv',
                params: {
                    api_key: 'b5d1c2545fd5913c018a04b6cd2e056a',
                    query: this.inputQuery
                }
            })
            .then((response) => {
                console.log(response.data.results[0]);

                this.seriesList = [];

                response.data.results.forEach(element => {
                    this.seriesList.push({
                        image: 'https://image.tmdb.org/t/p/w342/' + element.poster_path,
                        title: element.name,
                        originalTitle: element.original_name,
                        language: element.original_language.toUpperCase(),
                        countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                        vote: Math.ceil(element.vote_average / 2)
                    })
                });

            }).catch((error) => {
                console.error(error);
            });

    }
})