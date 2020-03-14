<template>
    <div>
        <Layout>
            <!--        sync修饰符，可直接修改子组件的source，无需另加方法-->
            <tags :source.sync="tags" @update:value="onUpdateTags"></tags>
            <notes @update:value="onUpdateNotes"></notes>
            <types :value.sync="record.type"></types>
            <number-pad :value.sync="record.amount" @submit="save"></number-pad>
            {{record}}
        </Layout>
    </div>
</template>

<script lang="ts">
    import notes from '@/components/Money/Notes.vue';
    import numberPad from '@/components/Money/NumberPad.vue';
    import tags from '@/components/Money/Tags.vue';
    import types from '@/components/Money/Types.vue';
    import {Vue, Component} from 'vue-property-decorator';

    type Record = {// 记录声明类型
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        createdDate?: Date; // object细分为不同的类 构造函数
    }
    @Component({
        components: {tags, notes, types, numberPad,}
    })

    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行', '长辈'];
        recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        record: Record = {tags: [], notes: '', type: '-', amount: 0};
        onUpdateTags(value: string[]) {
            console.log(value);
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            console.log(value);
            this.record.notes = value;
        }

        save() {
            const data: Record = JSON.parse(JSON.stringify(this.record));
            data.createdDate = new Date();
            this.recordList.push(data);
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }

    }
</script>

<style lang="scss" scoped>
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>