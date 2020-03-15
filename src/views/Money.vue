<template>
    <Layout>
        <!--        sync修饰符，可直接修改子组件的source，无需另加方法-->
        <tags :source.sync="tags" @update:value="onUpdateTags"></tags>
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
    import {Vue, Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListModel';

    const recordList = recordListModel.fetch();
    const tagList = tagListModel.fetch();

    @Component({
        components: {tags, formItem, types, numberPad}
    })

    export default class Money extends Vue {
        tags = window.tagList;
        recordList: RecordItem[] = recordList;
        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveOk() {
            recordListModel.create(this.record);
        }

        @Watch('recordList')
        onRecordListChange() {
            recordListModel.save();
        }

    }
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>