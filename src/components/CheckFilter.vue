<template>
    <div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="checkFilter">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false
            }
        },
        props: [
            'title'
        ],
        methods: {
            checkFilter() {
                this.checked = !this.checked;
                this.$emit('check-filter', 'genres', this.title, this.checked);  // this.$emit(EVENT_NAME)에 의해 parent의 v-on:EVENT_NAME 가 호출됨
            }
        }
    }
</script>

<style>

</style>