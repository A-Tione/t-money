<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li :class="{selected: selectedTags.indexOf(tag)>=0}" :key="tag.id"
                @click="toggle(tag)"
                v-for="tag in source">{{tag.name}}
            </li>
        </ul>
    </div>

</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import createId from '@/lib/createId';

    @Component
    export default class Tags extends Vue {
        @Prop(Array) source: string[] | undefined;
        selectedTags: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value', this.selectedTags);
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (name !== '' && this.source) {
                const newName = {id: createId().toString(), name};
                this.$emit('update:source', [...this.source, newName]);
            } else {
                window.alert('标签名不能为空');
            }
        }
    }

</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
                &.selected {
                    background: orange;
                    color: snow;
                    font-weight: 900;
                }
            }
        }
        > .new {
            padding-top: 16px;
            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>

