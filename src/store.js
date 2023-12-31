import { reactive } from 'vue';
import axios from '../node_modules/axios'
import { countryCodes } from './countryCodes.js'

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/search/',
    api_key: 'b5d1c2545fd5913c018a04b6cd2e056a', //we need this to make AJAX request
    inputQuery: null, //query
    movieList: [], //list of movies found,
    seriesList: [], //list of series found
    castList: [],
    genreList: [],
    inputGenre: '',

    /**
     * ### fetchData
     * > This function calls fetchMovies and fetchSeries functions
     */
    fetchData() {
        this.fetchMovies();
        this.fetchSeries();
        // this.inputQuery = '';
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
                this.movieList = [];
                response.data.results.forEach(element => {
                    this.fetchActors(element.id).then(actors => {
                        this.fetchMovieGenres(element.id).then(genres => {
                            if (element.genre_ids.includes(this.inputGenre) || this.inputGenre === '') {
                                this.movieList.push({
                                    image: 'https://image.tmdb.org/t/p/w342/' + element.poster_path,
                                    title: element.title,
                                    originalTitle: element.original_title,
                                    language: element.original_language.toUpperCase(),
                                    countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                                    vote: Math.ceil(element.vote_average / 2),
                                    overview: element.overview,
                                    cast: actors,
                                    genres: genres,
                                })
                            }
                        })
                    })

                });
            }).catch((error) => {
                // console.error(error);
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
                this.seriesList = [];

                response.data.results.forEach(element => {
                    this.fetchActors(element.id).then(actors => {
                        this.fetchSeriesGenres(element.id).then(genres => {
                            if (element.genre_ids.includes(this.inputGenre) || this.inputGenre === '') {
                                this.seriesList.push({
                                    image: 'https://image.tmdb.org/t/p/w342/' + element.poster_path,
                                    title: element.name,
                                    originalTitle: element.original_name,
                                    language: element.original_language.toUpperCase(),
                                    countryFlag: `https://flagcdn.com/32x24/${countryCodes[element.original_language]}.png`,
                                    vote: Math.ceil(element.vote_average / 2),
                                    overview: element.overview,
                                    cast: actors,
                                    genres: genres,
                                })
                            }
                        })

                    })

                });

            }).catch((error) => {
                // console.error(error);
            });

    },

    /**
     * ### fetchActors
     * > This function does an AJAX Call and returns a list of max five actors/actress.
     * @param {Number} item_id Movie or Series id
     * @returns A list of max 5 actors/actress.
     */
    async fetchActors(item_id) {
        const actors = []
        await axios
            .request({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${item_id}/credits`,
                params: {
                    api_key: this.api_key
                }
            })
            .then(response => {
                let i = 0;
                while (actors.length < 5 && i < response.data.cast.length) {
                    const castMember = response.data.cast[i]
                    if (castMember.known_for_department.toLowerCase() === 'acting') {
                        actors.push(castMember.name);
                    }
                    i++;
                }
            })
            .catch(error => {
                // console.error(error)
            })
        return actors;
    },

    async fetchMovieGenres(item_id) {
        const genres = [];
        await axios
            .request({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${item_id}`,
                params: {
                    api_key: this.api_key
                }
            })
            .then(response => {
                response.data.genres.forEach(element => genres.push(element));
            })
            .catch(error => {
                // console.error(error);
            })
        return genres;
    },

    async fetchSeriesGenres(item_id) {
        const genres = [];
        await axios
            .request({
                method: 'GET',
                url: `https://api.themoviedb.org/3/tv/${item_id}`,
                params: {
                    api_key: this.api_key
                }
            })
            .then(response => {
                response.data.genres.forEach(element => genres.push(element));
            })
            .catch(error => {
                // console.error(error);
            })
        return genres;
    },

    getAllGenres() {

        Promise.all([
            axios.request({
                url: 'https://api.themoviedb.org/3/genre/movie/list',
                params: {
                    api_key: this.api_key
                }
            }),

            axios.request({
                url: 'https://api.themoviedb.org/3/genre/tv/list',
                params: {
                    api_key: this.api_key
                }
            })

        ]).then(([movieGenres, seriesGenres]) => {
            const idList = [];

            movieGenres.data.genres.forEach(movieGenre => {
                this.genreList.push(movieGenre)
                idList.push(movieGenre.id)
            });

            seriesGenres.data.genres.forEach(seriesGenre => {
                if (!idList.includes(seriesGenre.id)) {
                    this.genreList.push(seriesGenre)
                }
            });

            this.genreList.sort((a, b) => a.name.localeCompare(b.name));
        });
    }
});


