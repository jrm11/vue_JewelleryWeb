<template>
        <div class="header-set">
                <!--用户信息-->
                <div class="user clearfix">
                        <div href="#" class="user-head">
                                <a href=""><img src="../assets/image/avatar.png" alt="头像"/></a>
                        </div>
                        <div class="user-info">
                                <p class="user-name">小明明</p>
                                <p class="user-level">进场 级别10</p>

                        </div>
                        <div class="user-set">
                                <a href="#" class="btn-setting">
                                        <img src="../assets/image/setting.svg" alt="">
                                </a>
                        </div>
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
        .header-set {
                /*用户信息*/
                .user {
                        padding: torem(10px);
                        @include flexBox;
                        width: 100%;
                        /*头像*/
                        .user-head {
                                float: left;
                                @include wh(torem(64px), torem(64px));
                                img {
                                        @include wh(100%, 100%);
                                }
                        }
                        /*信息*/
                        .user-info {
                                position: relative;
                                flex: 1;
                                -webkit-box-flex: 1;
                                margin-left: torem(20px);
                                .user-name {
                                        color: $C333;
                                        @include fz(16px);
                                        font-weight: bold;
                                }
                                .user-level {
                                        position: absolute;
                                        bottom: 0;
                                        @include fz(12px);
                                        color:$C666
                                }
                        }
                        /*设置*/
                        .user-set {
                                .btn-setting {
                                        width: torem(64px);
                                        height: torem(64px);
                                        img {
                                                width: 100%;
                                                height: 100%;
                                        }
                                }
                        }

                }
        }
</style>
