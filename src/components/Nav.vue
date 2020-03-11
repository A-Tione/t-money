<template>
    <div class="nav-box">
        <router-link to="/money">记账</router-link>
        |
        <router-link to="/labels">标签</router-link>
        |
        <router-link to="/statis">统计</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Nav',
        components: {},

        props: {},

        data() {
            return {}
        },

        methods: {}
    }
</script>f

<style lang="scss" scoped>
    .nav-box {
        border: 1px solid red;
    }

</style>