import { reactive } from 'vue';
import axios from '../node_modules/axios'
import { countryCodes } from './countryCodes.js'

export const store = reactive({
    movieRequest: { //this Object is used to make AJAX Calls to get our movie list
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'b5d1c2545fd5913c018a04b6cd2e056a',
            query: ''
        }
    },
    movieList: [], //list of movies,

    seriesRequest: {
        method: 'GET', //this Object is used to make AJAX Calls to get our series list
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
            api_key: 'b5d1c2545fd5913c018a04b6cd2e056a',
            query: ''
        }
    },


    /**
     * ### fetchMovies
     * > This function does an AJAX Call to get a movie list bases on a research.
     */
    fetchData() {
        if (this.movieRequest.params.query !== '') {
            axios
                .request(this.movieRequest)
                .then((response) => {

                    /* console.log(response);
                    console.log(response.data.results[0]); */
                    this.movieList = [];

                    response.data.results.forEach(element => {
                        this.movieList.push({
                            title: element.title,
                            originalTitle: element.original_title,
                            language: element.original_language.toUpperCase(),
                            countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                            vote: element.vote_average
                        })
                    });

                    // console.log(this.movieList);

                }).catch((error) => {
                    console.error(error);
                });
        }

        if (this.seriesRequest.params.query !== '') {
            axios
                .request(this.seriesRequest)
                .then((response) => {

                    console.log(response);
                    // console.log(response.data.results[0]);
                    this.seriesList = [];

                    response.data.results.forEach(element => {
                        this.seriesList.push({
                            title: element.title,
                            originalTitle: element.original_title,
                            language: element.original_language.toUpperCase(),
                            countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                            vote: element.vote_average
                        })
                    });

                    console.log(this.seriesList);

                }).catch((error) => {
                    console.error(error);
                });
        }

    }



})