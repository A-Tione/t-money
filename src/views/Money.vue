<template>
    <Layout>
        <!--        sync修饰符，可直接修改子组件的source，无需另加方法-->
        <tags></tags>
        <form-item @update:value="onUpdateNotes"
                   field-name="备注"
                   placeholder="在这里输入备注">
        </form-item>
        <types :value.sync="record.type"></types>
        <number-pad :value.sync="record.amount" @submit="saveOk"></number-pad>
        {{record}}
    </Layout>
</template>

<script lang="ts">
    import numberPad from '@/components/Money/NumberPad.vue';
    import tags from '@/components/Money/Tags.vue';
    import types from '@/components/Money/Types.vue';
    import formItem from '@/components/Money/FormItem.vue';
    import {Vue, Component} from 'vue-property-decorator';


    @Component({
        components: {tags, formItem, types, numberPad},
    })

    export default class Money extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }

        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

        created(): void {
            this.$store.commit('fetchRecords');
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveOk() {
            this.$store.commit('createRecord', this.record);
        }

    }
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>