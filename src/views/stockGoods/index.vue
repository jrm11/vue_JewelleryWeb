<template>
        <section class="collection">
                <header-top></header-top>
                <user-nav></user-nav>

                <section class="footer-nav">
                        <button class="del">删除</button>
                        <button class="in">进入谈价</button>
                </section>
        </section>
</template>

<script>
        import headerTop from '@/components/header.vue'
        import userNav from '@/components/user-nav.vue'

        export default {
                data() {
                        return {
                                currentView: "meOrder"
                        }
                },
                components: {
                        headerTop,
                        userNav,
                },
                methods: {
                        toggleTabs(tabText){
                                this.currentView = tabText;
                        }
                }

        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../assets/style/app";

        .collection {

                /*导航*/
                .nav {
                        @include flexBox;
                        margin-top: torem(30px);
                        li {
                                flex: 1;
                                display: inline-block;
                                background: #009966;
                                padding: torem(10px) 0;
                                color: $CFFF;
                                text-align: center;
                                border-top-left-radius: torem(15px);
                                border-top-right-radius: torem(15px);
                                margin-left: torem(5px);
                        }
                        li:first-of-type {
                                margin-left: 0;
                        }
                }
                /*用户信息*/
                .user {
                        padding: torem(20px);
                        @include flexBox;
                        width: 100%;
                        /*头像*/
                        .user-head {
                                float: left;
                                @include wh(torem(100px), torem(100px));
                                img {
                                        @include wh(100%, 100%);
                                }
                        }
                        /*信息*/
                        .user-info {
                                flex: 1;
                                -webkit-box-flex: 1;
                                margin-left: torem(20px);
                                .user-name {
                                        color: $C333;
                                        @include fz(30);
                                        font-weight: bold;
                                }
                                .user-level {
                                        margin-top: torem(20px);
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

                /*子导航*/
                .sub-nav {
                        @include flexBox;
                        margin-bottom: torem(30px);
                        li {
                                flex: 1;
                                display: inline-block;
                                background: $BGFFF;
                                padding: .5rem 0;
                                text-align: center;
                        }
                        li:nth-of-type(2) {
                                margin: 0 torem(20px);
                        }
                }

                /*底部按钮*/

                .footer-nav {
                        @include flexBox;
                        position: fixed;
                        width: 100%;
                        bottom: 0;
                        button {
                                flex: 1;
                                padding: torem(30px);
                                @include sc(26px, $CFFF)
                        }
                        .in {
                                background-color: $BG409EFF;
                        }
                        .del {
                                background-color: #ff0000;
                        }
                }
        }
</style>
