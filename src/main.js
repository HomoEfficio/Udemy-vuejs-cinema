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
                               <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkListener"></check-filter>                         
                           </div>
                       </div>`,
            methods: {
                checkListener() {
                    console.log('checkListener');
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
                            this.$emit('check-filter');  // this.$emit(EVENT_NAME)에 의해 parent의 v-on:EVENT_NAME 가 호출됨
                        }
                    }
                }
            }
        }
    }
});