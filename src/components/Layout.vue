<template>
    <div class="nav-rapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav></Nav>
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
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
        .content {
            border: 1px solid blue;
            overflow: auto;
            flex-grow: 1;
        }
    }

</style>