<template>
        <!--产品信息列表-->
        <div class="product-info">
                <ul class="media-list">
                        <li class="media">
                                <!--checkbox-->
                                <div href="#" class="check-pic">
                                        <img src="../../../assets/image/check.svg" alt="头像" width="32"/>
                                </div>
                                <!--产品图-->
                                <div href="#" class="avatar-pic">
                                        <img src="../../../assets/image/avatar.png" alt="头像" width="96"/>
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
                                        <img src="../../../assets/image/check.svg" alt="头像" width="32"/>
                                </div>
                                <!--产品图-->
                                <div href="#" class="avatar-pic">
                                        <img src="../../../assets/image/avatar.png" alt="头像" width="96"/>
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
                                        <img src="../../../assets/image/check.svg" alt="头像" width="32"/>
                                </div>
                                <!--产品图-->
                                <div href="#" class="avatar-pic">
                                        <img src="../../../assets/image/avatar.png" alt="头像" width="96"/>
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

</template>

<script>

        export default {
                data() {
                        return {
                                msg: ''
                        }
                },
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../../assets/style/app";
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
</style>
