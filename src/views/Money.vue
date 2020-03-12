<template>
    <div>
        <Layout>
            <tags></tags>
            <notes></notes>
            <types></types>
            <number-pad></number-pad>
        </Layout>
    </div>
</template>

<script lang="ts">
    import notes from '@/components/Money/Notes.vue'
    import numberPad from '@/components/Money/NumberPad.vue'
    import tags from '@/components/Money/Tags.vue'
    import types from '@/components/Money/Types.vue'

    export default {
        name: 'money',
        components: {
            tags,
            notes,
            types,
            numberPad,
        },
        data() {
            return {}
        },

        methods: {}
    }
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>