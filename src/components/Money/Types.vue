<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected'"
                @click="selectType('-')">支出
            </li>
            <li :class="value === '+' && 'selected'"
                @click="selectType('+')">收入
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch,} from 'vue-property-decorator';// 装饰器

    @Component
    export default class Types extends Vue {
        @Prop(String) readonly value!: string;// readonly只能读不能写   !感叹号表示不需要初始值

        selectType(value: string) { // 或+或-
            if (value !== '-' && value !== '+') {
                throw new Error('value is unknown');
            }
            this.$emit('update:value', value);
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>