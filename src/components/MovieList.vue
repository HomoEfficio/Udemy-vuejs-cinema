<template>
    <div id='movie-list'>
        <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    
    export default {
        data: function() {  // Component는 여러 인스턴스로 생성되어 재사용 될 수 있으므로 data가 함수여야 한다.
            return {
                movies: [
                    {
                        title: 'Pulp Fiction', genres: genres.ACTION
                    },
                    {
                        title: 'Home Alone', genres: genres.COMEDY
                    },
                    {
                        title: 'Austin Powers', genres: genres.COMEDY
                    },
                ]
            }
        },
        props: ['genres', 'time'],
        methods: {
            moviePassesGenreFilter(movie) {
                return this.genres.find(genre => movie.genres === genre)
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


