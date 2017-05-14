import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
    el: '#app',
    data: {
        genres: [],
        time: [],
        movies: []
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
        MovieList,
        MovieFilter
    },
    created() {
        this.$http.get('/api').then(
            res => {
                this.movies = res.data;
            }
        )
    }
});