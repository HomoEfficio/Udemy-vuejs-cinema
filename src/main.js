import Vue from 'vue';
import './style.scss';

import genres from './util/genres';
console.log(genres);

new Vue({
    el: '#app',
    data: {
        genres: [],
        time: []
    },
    methods: {
        checkFilter(category, title, checked) {
            console.log(category, title, checked);
            if (checked) {
                this[category].push(title);
            } else {
                let i = this[category].indexOf(title);
                if (i > -1) {
                    this[category].splice(i, 1);
                }
            }

        }
    },
    components: {
        'movie-list': {
            template: `<div id='movie-list'>
                           <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
                       </div>`,
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
        },
        'movie-filter': {
            data() {
                return {
                    genres
                }
                // return genres;  // 이렇게 하면 [Vue warn]: Property or method "genres" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.
            },
            template: `<div id='movie-filter'>
                           <h2>Filter Results</h2>
                           <div class="filter-group">
                               <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkListener"></check-filter>                         
                           </div>
                       </div>`,
            methods: {
                checkListener(category, title, checked) {
                    this.$emit('check-filter', category, title, checked);
                }
            },
            components: {
                'check-filter': {
                    data() {
                        return {
                            checked: false
                        }
                    },
                    props: [
                        'title'
                    ],
                    template: `<div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="checkFilter">
                                   <span class="checkbox"></span>
                                   <span class="check-filter-title">{{ title }}</span>
                               </div>`,
                    methods: {
                        checkFilter() {
                            this.checked = !this.checked;
                            this.$emit('check-filter', 'genres', this.title, this.checked);  // this.$emit(EVENT_NAME)에 의해 parent의 v-on:EVENT_NAME 가 호출됨
                        }
                    }
                }
            }
        }
    }
});