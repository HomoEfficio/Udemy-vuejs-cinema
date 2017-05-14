<template>
    <div id='movie-filter'>
        <h2>Filter Results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkListener"></check-filter>
        </div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import CheckFilter from './CheckFilter.vue';

    export default {
        data() {
            return {
                genres
            }
            // return genres;  // 이렇게 하면 [Vue warn]: Property or method "genres" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.
        },
        methods: {
            checkListener(category, title, checked) {
                this.$emit('check-filter', category, title, checked);
            }
        },
        components: {
            CheckFilter
        }
    }
</script>