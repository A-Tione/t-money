<template>
    <div class="nav-box">
        <router-link class="link" to="/money">
            <Icon name="money"></Icon>
            记账
        </router-link>
        |
        <router-link class="link" to="/labels">
            <Icon name="label"></Icon>
            标签
        </router-link>
        |
        <router-link class="link" to="/statis">
            <Icon name="statis"></Icon>
            统计
        </router-link>
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
        display: flex;
        border: 1px solid red;
        .link {
            display: flex;
        }
    }

</style>