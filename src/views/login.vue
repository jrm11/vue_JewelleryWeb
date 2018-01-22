<template>
    <div class="login">
        <header-top head-title='登录'></header-top>

        <div class="login-content">
            <div class="account-pwd">
                <div class="account">
                    <input type="text" placeholder="请输入账号" v-model.trim="username" maxlength="11" minlength="11">
                </div>
                <hr class="solid-hr">
                <div class="password">
                    <input type="password" placeholder="请输入密码" v-model.trim="password" minlength="6" maxlength="32">
                    <span @click="changeBrowsePic">
                        <img class="browse-pic" src="../assets/image/eye-off.svg" alt="pic"
                             v-show="flag">
                        <img class="browse-pic" src="../assets/image/eye.svg" alt="pic"
                             v-show="!flag">
                    </span>
                </div>
                <hr class="solid-hr">
                <div class="v-code">
                    <input type="text" placeholder="验证码">
                    <p>{{checkCode}}</p>
                    <div class="btn-change-code" @click="createCode">
                        <span>看不清</span>
                        <span>换一张</span>
                    </div>
                </div>
            </div>
            <div class="clearfix register">
                <a class="fl" @click="forgetPwd">忘记密码</a>
                <a class="fr" @click="register">注册</a>
            </div>
            <button class="btn-login" @click="login">登录</button>

        </div>
    </div>
</template>

<script>
    import headerTop from '@/components/header.vue'
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                checkCode: "",
                flag: true,
                username: "",
                password: ""
            }
        },
        components: {
            headerTop,
        },
        mounted() {
            this.createCode()
        },
        methods: {
            createCode() {
                let code = "";
                let codeLength = 6;//验证码的长度
                let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];//随机数
                for (let i = 0; i < codeLength; i++) {
                    //循环操作
                    let index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
                    code += random[index];//根据索引取得随机数加到code上
                }
                this.checkCode = code;//把code值赋给验证码
            },
            changeBrowsePic() {
                this.flag = !this.flag;
            },
            login() {
                if (this.password === "" || this.username === "") {
                    alert('请输入账号或密码')
                }else{
                    this.$router.push("/index")
                }
            },
            register(){
                this.$router.push("/register")
            },
            forgetPwd(){
                this.$router.push("/forgetPwd")
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/style/app";

    .login {
        position: relative;
        height: 100%;
        .login-content {
            margin-top: torem(14px);
            .account-pwd {
                background-color: $BGFFF;
                width: 100%;
                input {
                    width: 100%;
                    padding: torem(15px) torem(100px) torem(15px) torem(20px);
                    border: none;
                    @include fz(16px);
                    color: $C666;
                }
                .password {
                    position: relative;
                    .browse-pic {
                        position: absolute;
                        right: torem(20px);
                        @include ct;

                    }
                }

                .v-code {
                    @include flexBox;
                    align-items: center;
                    input {
                        flex: 1;
                    }
                    p {
                        float: right;
                        padding: torem(5px);
                        @include fz(16px);
                        color: $C666;
                    }
                    .btn-change-code {
                        float: right;
                        height: 100%;
                        padding: 0 torem(20px);
                        @include fz(13px);
                        text-align: center;
                        span {
                            display: block;
                            color: #0099ff;
                        }
                    }
                }

            }
            .solid-hr {
                border-color: $C666;
            }

            .btn-login {
                width: 90%;
                margin: 0 auto;
                padding: torem(10px) 0;
                @include borderRadius(10px);
                @include fz(16px);
                @include cl;
                color: $CFFF;
                background-color: $BG409EFF;
            }
            .register {
                padding: torem(20px);
                @include sc(25px, #0099ff);
            }
        }
    }

</style>
