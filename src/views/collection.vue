<template>
        <div class="collection">
                <header-top></header-top>
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
                <ul class="nav">
                        <li>店铺管理</li>
                        <li>产品进场</li>
                        <li>我的订单</li>
                        <li>我的保荐</li>
                        <li>私人订制</li>
                        <li>BB进货</li>
                </ul>
                <ul class="sub-nav">
                        <li>BB收藏</li>
                        <li>BB谈价</li>
                        <li>我的订单</li>
                </ul>

                <!--产品信息列表-->
                <div class="product-info">
                        <ul class="media-list">
                                <li class="media">
                                        <a href="#" class="media-left check-pic">
                                                <img src="../assets/image/check.svg" alt="头像" width="32"/>
                                        </a>
                                        <a href="#" class="media-left avatar-pic">
                                                <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                                        </a>
                                        <div class="media-body">
                                                <div class="media-heading clearfix">
                                                        <span class="fl">足金戒指</span>
                                                        <span class="fr">219万</span>
                                                </div>
                                                <p class="clearfix">
                                                        <span class="fl">B价1023元</span>
                                                        <a class="fr product-detail">产品详情</a>
                                                </p>
                                        </div>
                                </li>
                                <li class="media">
                                        <a href="#" class="media-left check-pic">
                                                <img src="../assets/image/check.svg" alt="头像" width="32"/>
                                        </a>
                                        <a href="#" class="media-left avatar-pic">
                                                <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                                        </a>
                                        <div class="media-body">
                                                <div class="media-heading clearfix">
                                                        <span class="fl">足金戒指</span>
                                                        <span class="fr">219万</span>
                                                </div>
                                                <p class="clearfix">
                                                        <span class="fl">B价1023元</span>
                                                        <a class="fr product-detail">产品详情</a>
                                                </p>
                                        </div>
                                </li>
                                <li class="media">
                                        <a href="#" class="media-left check-pic">
                                                <img src="../assets/image/check.svg" alt="头像" width="32"/>
                                        </a>
                                        <a href="#" class="media-left avatar-pic">
                                                <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                                        </a>
                                        <div class="media-body">
                                                <div class="media-heading clearfix">
                                                        <span class="fl">足金戒指</span>
                                                        <span class="fr">219万</span>
                                                </div>
                                                <p class="clearfix">
                                                        <span class="fl">B价1023元</span>
                                                        <a class="fr product-detail">产品详情</a>
                                                </p>
                                        </div>
                                </li>
                                <li class="media">
                                        <a href="#" class="media-left check-pic">
                                                <img src="../assets/image/check.svg" alt="头像" width="32"/>
                                        </a>
                                        <a href="#" class="media-left avatar-pic">
                                                <img src="../assets/image/avatar.png" alt="头像" width="96"/>
                                        </a>
                                        <div class="media-body">
                                                <div class="media-heading clearfix">
                                                        <span class="fl">足金戒指</span>
                                                        <span class="fr">219万</span>
                                                </div>
                                                <p class="clearfix">
                                                        <span class="fl">B价1023元</span>
                                                        <a class="fr product-detail">产品详情</a>
                                                </p>
                                        </div>
                                </li>
                        </ul>

                </div>
        </div>
</template>

<script>
        import headerTop from '@/components/header.vue'
        export default {
                data () {
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
                        margin-top: 20px;
                        li {
                                flex: 1;
                                display: inline-block;
                                background: #009966;
                                padding: 10px 0;
                                color: $CFFF;
                                text-align: center;
                                border-top-left-radius: 15px;
                                border-top-right-radius: 15px;
                                margin-left: 5px;
                        }
                        li:first-of-type {
                                margin-left: 0;
                        }
                }

                /*用户信息*/
                .user {
                        padding:20px;
                        @include flexBox;
                        width: 100%;
                        /*头像*/
                        .user-head {
                                float: left;
                                width: 100px;
                                height: 100px;
                                img {
                                        width: 100%;
                                        height: 100%;
                                }
                        }
                        /*信息*/
                        .user-info {
                                flex: 1;
                                -webkit-box-flex: 1;
                                margin-left:20px;
                                .user-name{
                                        color:$C333;
                                        font-size: 30px;
                                        font-weight: bold;
                                }
                                .user-level{
                                        margin-top:20px;
                                }
                        }
                        /*设置*/
                        .user-set {
                                .btn-setting {
                                        width: 64px;
                                        height: 64px;
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
                        margin-bottom: 30px;
                        li {
                                flex: 1;
                                display: inline-block;
                                background: $BGFFF;
                                padding: .5rem 0;
                                text-align: center;
                        }
                        li:nth-of-type(2) {
                                margin: 0 20px;
                        }
                }
                .product-info {
                        .media-list {

                                .media {
                                        padding: 20px;
                                        position: relative;
                                        border-bottom: 1px solid $BDDDD;
                                        background: $BGFFF;
                                        .check-pic {
                                                position: absolute;
                                                top: 50%;
                                                transform: translateY(-50%);
                                        }
                                        .avatar-pic {
                                                margin-left: 50px;
                                                margin-right: 20px;
                                        }
                                }
                        }
                        .media-body {
                                .media-heading {
                                        font-size: 30px;
                                        font-weight: bold;
                                        color: $C333;

                                }

                                p {
                                        margin-top: 20px;
                                        .product-detail {
                                                border: 1px solid $BDDDD;
                                                padding: 2px 10px;
                                                margin-top:-5px;
                                        }
                                }

                        }

                }
        }
</style>
