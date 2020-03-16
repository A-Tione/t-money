<template>
    <Layout>
        <!--        sync修饰符，可直接修改子组件的source，无需另加方法-->
        <tags @addTags="addTags"></tags>
        <div class="notes">
            <form-item @update:value="onUpdateNotes"
                       field-name="备注"
                       placeholder="在这里输入备注">
            </form-item>
        </div>
        <tabs :data-source="recordTypeList" :value.sync="record.type"></tabs>
        <number-pad :value.sync="record.amount" @submit="saveOk"></number-pad>
    </Layout>
</template>

<script lang="ts">
    import numberPad from '@/components/Money/NumberPad.vue';
    import tags from '@/components/Money/Tags.vue';
    import formItem from '@/components/Money/FormItem.vue';
    import {Vue, Component} from 'vue-property-decorator';
    import tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';

    @Component({
        components: {tabs, tags, formItem, numberPad},
    })
    export default class Money extends Vue {
        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
        recordTypeList = recordTypeList;

        get recordList() {
            return this.$store.state.recordList;
        }

        created(): void {
            this.$store.commit('fetchRecords');
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        addTags(value: string[]) {
            this.record.tags = value;
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
    .nores {
        padding: 12px 0;
    }
</style>