<template>
    <div>
        <svg class="icon">
            <use :xlink:href="'#' + name"></use>
        </svg>
    </div>
</template>

<script lang="ts">
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
    try {
        importAll(require.context('@/assets/icons', true, /\.svg$/))//将一个目录里面所有的文件引入到当前文件
    } catch (error) {
        console.log(error)
    }
    export default {
        name: 'Icon',
        components: {},

        props: {
            name: {
                type: String,
                default() {
                    return 'money'
                }
            }
        },

        data() {
            return {}
        },


        methods: {}
    }
</script>

<style lang="scss" scoped>

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>