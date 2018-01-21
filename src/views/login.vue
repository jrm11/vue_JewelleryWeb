<template>
    <div class="login">
        <header-top></header-top>
        <div class="login-content">
            <div class="account-pwd">
                <div class="account">
                    <input type="text" placeholder="请输入账号">
                </div>
                <hr class="solid-hr">
                <div class="password">
                    <input type="password" placeholder="请输入密码">
                    <img class="browse-pic" src="../assets/image/eye-off.svg" alt="">
                </div>
                <hr class="solid-hr">
                <div class="v-code">
                    <input type="text" placeholder="验证码">

                </div>
            </div>
            <div class="clearfix register">
                <span class="fl">忘记密码</span>
                <span class="fr">注册</span>
            </div>

            <button class="btn-login">登录</button>

        </div>
    </div>
</template>

<script>
    import headerTop from '@/components/header.vue'

    export default {
        data() {
            return {
                msg: ''
            }
        },
        components: {
            headerTop
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/style/app";

    .login {
        position: relative;
        height: 100%;
        .login-content {
            margin-top: torem(50px);
            height: 100px;
            .account-pwd {
                position: relative;
                background-color: $BGFFF;
                padding: torem(20px);
                width: 100%;
                input {
                    width: 100%;
                    padding: torem(20px) torem(100px) torem(20px) torem(10px);
                    border: none;
                    @include sc(30px, $C666);
                }
                .browse-pic{
                    position: absolute;
                    right: 30px;
                    @include ct;
                }
            }
            .solid-hr {
                border-color: $C666;
            }

            .btn-login {
                width: 80%;
                @include borderRadius(10px);
                background-color: $BG409EFF;
                @include sc(30px, $CFFF);
                @include cl;
                padding: torem(15px);
                margin-top: torem(50px);
            }
            .register {
                padding: torem(20px);
                @include sc(25px, #0099ff);
            }
        }
    }
</style>
