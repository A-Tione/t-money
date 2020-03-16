<template>
    <Layout>
        <tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"></tabs>
        <ol v-if="groupedList.length">
            <li :key="index" v-for="(group, index) in groupedList">
                <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
                <ol>
                    <li :key="item.id" class="record"
                        v-for="item in group.items">
                        <span class="notes">{{item.notes ? item.notes : '无'}}</span>
                        <span>￥{{item.amount}} </span>
                    </li>
                </ol>
            </li>
        </ol>
        <div class="noRecord" v-else>暂无记录</div>
    </Layout>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';

    @Component({
        components: {tabs}
    })
    export default class Statis extends Vue {
        type = '-';
        recordTypeList = recordTypeList;

        beforeCreate(): void {
            this.$store.commit('fetchRecords');
        }


        beautify(string: string) {
            const day = dayjs(string);
            const now = dayjs();
            if (day.isSame(now, 'day')) {
                return '今天';
            } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
                return '昨天';
            } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
                return '前天';
            } else if (day.isSame(now, 'year')) {
                return day.format('M月D日');
            } else {
                return day.format('YYYY年M月D日');
            }
        }

        get recordList() {
            return (this.$store.state as RootState).recordList;
        }

        get groupedList() {
            const {recordList} = this;
            if (recordList.length === 0) {
                return [];
            }

            const newListType = clone(recordList).filter(o => o.type === this.type);
            console.log(newListType);
            if (newListType.length === 0) {
                return [];
            }
            const newList = newListType.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
            type Result = { title: string; total?: number; items: RecordItem[] }[]
            const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
            for (let i = 0; i < newList.length; i++) {
                const current = newList[i];
                const last = result[result.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
                    last.items.push(current);
                } else {
                    result.push({title: dayjs(current.createdAt).format('YYYY-DD-MM'), items: [current]});
                }
            }
            result.map(group => {
                group.total = group.items.reduce((sum, item) => {
                    return sum + item.amount;
                }, 0);
            });
            return result;
        }
    }

</script>
<style lang="scss" scoped>
    ::v-deep {
        .type-tabs-item {
            background: #C4C4C4;
            &.selected {
                background: white;
                &::after {
                    display: none;
                }
            }
        }
        .interval-tabs-item {
            height: 48px;
        }
    }
    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title {
        @extend %item;
    }
    .record {
        background: white;
        @extend %item;
    }
    .notes {
        margin-right: auto;
        color: #999;
    }
    .noRecord {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>