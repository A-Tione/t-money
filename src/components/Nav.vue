<template>
    <div class="nav-box">
        <router-link active-class="selected" class="link" to="/money">
            <Icon name="money"></Icon>
            记账
        </router-link>
        <router-link active-class="selected" class="link" to="/labels">
            <Icon name="label"></Icon>
            标签
        </router-link>
        <router-link active-class="selected" class="link" to="/statis">
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
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        flex-direction: row;
        font-size: 12px;
        min-height: 40px;
        > .link {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon {
                width: 32px;
                height: 32px;
            }
            &.selected {
                color: orange;
                font-weight: 900;
            }
        }
    }

</style>