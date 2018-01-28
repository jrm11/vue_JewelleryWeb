<template>
    <div>
        <input class="select-input" type="text" v-model="inputVal" @click="show">
        <ul class="down-list" v-show="isShow">
            <li class="list" v-for="(item,index) in list" @click="select(index)" >{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: ["北京", "上海", "广州", "深圳"],
                inputVal: "",
                isShow: false
            }
        },
        methods: {
            select(i) {
                this.inputVal = this.list[i];
            },
            show() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped>

    .select-input {
        border: 1px solid #ddd;
        padding: .1rem;
        border-radius: 5px;
    }

    .down-list {
        background: #fff;
        border: 1px solid #ddd;
        margin-top: 10px;
    }

    .list {
        padding: .2rem;
        border-bottom: 1px solid #ddd;
    }

    .list:active{
        background: #d0d0d0;
    }

    .list:last-of-type{
        border-bottom: none;
    }
</style>