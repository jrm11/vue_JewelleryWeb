<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button class="btn btn-primary" @click="login">按钮</button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                msg: '这是一个主页'
            }
        },
        methods: {
            login() {
                let instance = Toast('提示信息');
                setTimeout(() => {
                    instance.close();
                }, 20000);
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
