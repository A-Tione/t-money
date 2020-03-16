<template>
    <Layout>
        <tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"></tabs>
        <ol>
            <li :key="index" v-for="(group, index) in groupedList">
                <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
                <ol>
                    <li :key="item.id" class="record"
                        v-for="item in group.items"
                    >
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}} </span>
                    </li>
                </ol>
            </li>
        </ol>
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

        tagString(tags: Tag[]) {
            return tags.length === 0 ? '无' : tags.join(',');
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
        margin-left: 16px;
        color: #999;
    }
</style>