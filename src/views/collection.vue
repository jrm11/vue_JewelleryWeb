<template>
    <section class="collection">
        <header-top></header-top>
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
        <!--导航-->
        <ul class="nav">
            <li>店铺管理</li>
            <li>产品进场</li>
            <li>我的订单</li>
            <li>我的保荐</li>
            <li>私人订制</li>
            <li>BB进货</li>
        </ul>
        <!--子导航-->
        <ul class="sub-nav">
            <li>BB收藏</li>
            <li>BB谈价</li>
            <li>我的订单</li>
        </ul>

        <!--产品信息列表-->
        <div class="product-info">
            <ul class="media-list">
                <li class="media">
                    <!--checkbox-->
                    <div href="#" class="check-pic">
                        <img src="../assets/image/check.svg" alt="头像" width="32"/>
                    </div>
                    <!--产品图-->
                    <div href="#" class="avatar-pic">
                        <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                    </div>

                    <div class="media-body">
                        <div class="clearfix media-head">
                            <h3 class="fl">足金戒指</h3>
                            <span class="fr">219万</span>
                        </div>

                        <div class="clearfix media-sub-head">
                            <span class="fl">B价1023元</span>
                            <a class="fr product-detail">产品详情</a>
                        </div>
                    </div>
                </li>
                <li class="media">
                    <!--checkbox-->
                    <div href="#" class="check-pic">
                        <img src="../assets/image/check.svg" alt="头像" width="32"/>
                    </div>
                    <!--产品图-->
                    <div href="#" class="avatar-pic">
                        <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                    </div>

                    <div class="media-body">
                        <div class="clearfix media-head">
                            <h3 class="fl">足金戒指</h3>
                            <span class="fr">219万</span>
                        </div>

                        <div class="clearfix media-sub-head">
                            <span class="fl">B价1023元</span>
                            <a class="fr product-detail">产品详情</a>
                        </div>
                    </div>
                </li>
                <li class="media">
                    <!--checkbox-->
                    <div href="#" class="check-pic">
                        <img src="../assets/image/check.svg" alt="头像" width="32"/>
                    </div>
                    <!--产品图-->
                    <div href="#" class="avatar-pic">
                        <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                    </div>

                    <div class="media-body">
                        <div class="clearfix media-head">
                            <h3 class="fl">足金戒指</h3>
                            <span class="fr">219万</span>
                        </div>

                        <div class="clearfix media-sub-head">
                            <span class="fl">B价1023元</span>
                            <a class="fr product-detail">产品详情</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <section class="footer-nav">
            <button class="del">删除</button>
            <button class="in">进入谈价</button>
        </section>
    </section>
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
        /*产品信息*/
        .product-info {
            .media-list {
                .media {
                    @include flexBox;
                    padding: torem(20px);
                    position: relative;
                    border-bottom: 1px solid $BDDD;
                    background: $BGFFF;
                    .check-pic {
                        @include ct;
                    }
                    .avatar-pic {
                        margin-left: torem(50px);
                        margin-right: torem(20px);
                    }
                    .media-body {
                        flex: 1;
                        -webkit-box-flex: 1;
                        .media-sub-head {
                            padding-top: torem(25px);
                            .product-detail {
                                border: 1px solid $BDDD;
                                padding: torem(5px) torem(15px);
                                margin-top: -5px;
                            }
                        }
                    }
                    span, a {
                        color: $C666
                    }
                }
                .media:active {
                    background: $BGDDD;
                }
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
                @include sc(26px,$CFFF)
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
