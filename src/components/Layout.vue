<template>
    <div class="nav-rapper">
        <Nav></Nav>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Layout',
        components: {},

        props: {},

        data() {
            return {}
        },


        methods: {}
    }
</script>

<style lang="scss" scoped>
    .nav-rapper {
        display: flex;
        flex-direction: column-reverse;
        height: 100vh;
        .content {
            overflow: auto;
            flex-grow: 1;
        }
    }

</style>