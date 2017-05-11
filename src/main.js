import Vue from 'vue';
import './style.scss';

import genres from './util/genres';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `<div id='movie-list'>
                           <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                       </div>`,
            data: function() {  // Component는 여러 인스턴스로 생성되어 재사용 될 수 있으므로 data가 함수여야 한다.
                return {
                    movies: [
                        {
                            title: 'Pulp Fiction',
                        },
                        {
                            title: 'Home Alone',
                        },
                        {
                            title: 'Austin Powers',
                        },
                    ]
                }
            }
        },
        'movie-filter': {
            data() {
                return {
                    genres
                }
            },
            template: `<div id='movie-filter'>
                           <h2>Filter Results</h2>
                           <div class="filter-group">
                               <check-filter v-for="genre in genres" title="My Title"></check-filter>                         
                           </div>
                       </div>`,
            components: {
                'check-filter': {
                    props: [
                        'title'
                    ],
                    template: `<div>{{ title }}</div>`
                }
            }
        }
    }
});