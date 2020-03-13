<template>
    <div>
        <Layout>
            <!--        sync修饰符，可直接修改子组件的source，无需另加方法-->
            <tags :source.sync="tags"></tags>
            <notes></notes>
            <types xxx="5555"></types>
            <number-pad></number-pad>
        </Layout>
    </div>
</template>

<script lang="ts">
    import notes from '@/components/Money/Notes.vue';
    import numberPad from '@/components/Money/NumberPad.vue';
    import tags from '@/components/Money/Tags.vue';
    import types from '@/components/Money/Types.vue';

    export default {
        name: 'money',
        components: {
            tags,
            notes,
            types,
            numberPad,
        },
        data() {
            return {
                tags: ['衣', '食', '住', '行', '长辈']
            };
        },

        methods: {}
    };
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>