<template>
    <div id='movie-list'>
        <div v-for="movie in filteredMovies" class="movie">{{ movie.movie.Title }}</div>
    </div>
</template>

<script>
    import genres from '../util/genres';

    export default {
        props: ['genres', 'time', 'movies'],
        methods: {
            moviePassesGenreFilter(movie) {
                if (this.genres.length) {
                    return this.genres.find(genre => movie.genres === genre)
                }
                return true;
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        }
    }
</script>

<style>
</style>


