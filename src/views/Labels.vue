<template>
    <Layout>
        <div class="tags">
            <router-link :key="tag.id"
                         :to="`/labels/edit/${tag.id}`" class="tag"
                         v-for="tag in tags">
                <span>{{tag.name}}</span>
                <Icon class="right" name="right"/>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button @click="createTag"
                    class="createTag">
                新建标签
            </Button>
        </div>
    </Layout>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';

    @Component({
        components: {Button}
    })
    export default class Labels extends mixins(TagHelper) {
        get tags() {
            return this.$store.state.tagList;
        }

        created(): void {
            this.$store.commit('fetchTags');
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;
            padding-left: 16px;
            .right {
                margin-right: 16px;
            }
            svg {
                width: 18px;
                height: 18px;
                color: #666;
            }
        }
    }
    .createTag {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>

