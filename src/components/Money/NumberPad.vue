<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="deleteOne">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clearOrder">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="submitOk" class="ok">OK</button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        @Prop(Number) readonly value!: number;
        output = this.value.toString();

        inputContent(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);// 强制规定为HTMLButtonElement类型
            const text = button.textContent!;// !表示不会为空
            if (this.output.length === 16) {// 最大长度为16位
                return;
            }
            if (this.output === '0') {
                if ('1234567890'.indexOf(text) >= 0) {
                    this.output = text;
                } else {
                    this.output += text;
                }
                return;
            }
            if (this.output.indexOf('.') >= 0 && text === '.') {
                return;
            }
            this.output += text;
        }

        deleteOne() {
            if (this.output.length === 1) {
                this.output = '0';
            } else {
                this.output = this.output.slice(0, -1);
            }
        }

        clearOrder() {
            this.output = '0';
        }

        submitOk() {
            this.$emit('update:value', parseFloat(this.output));
            this.$emit('submit');
            this.output = '0';
        }
    }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .numberPad {
        .output {
            @extend %clearFix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
            text-align: right;
            height: 72px;
        }
        .buttons {
            margin-bottom: 40px;
            $bg: rgba(237, 156, 59, 1);
            @extend %clearFix;
            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;
                font-size: 20px;
                color: #efefef;
                &.ok {
                    height: 64*2px;
                    float: right;
                }
                &.zero {
                    width: 25*2%;
                }
                $bg: rgba(237, 156, 59, 1);
                &:nth-child(1) {
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }
                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }
                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>