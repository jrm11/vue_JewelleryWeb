<template>
        <div class="login">
                <div class="btn-group">
                <button class="btn btn-default btn-sm">按钮</button>
                <button class="btn btn-primary btn-sm">按钮</button>
                <button class="btn btn-success btn-sm">按钮</button>
                <button class="btn btn-danger btn-sm">按钮</button>
                <button class="btn btn-waring btn-sm">按钮</button>
                </div>
        </div>
</template>

<script>
        export default {
                data () {
                        return {
                                msg: ''
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../assets/style/app";

        .login {
                button {
                        font-size: 36px;
                        padding:.1rem .5rem;
                        color: $CFFF;
                }
        }
</style>
