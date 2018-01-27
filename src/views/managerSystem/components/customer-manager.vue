<template>
    <!--顾客管理-->
    <section class="customer-manager">
        <div class="customer-info">
            <span>顾客数：233人</span>
            <span>顾客购物：232单</span>
            <span>金额：2323元</span>
        </div>
        <ul>
            <li>
                <div class="customer"><!-- 产品图片 -->
                    <div class="customer-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>
                    <!-- 产品描述文本 -->
                    <div class="customer-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12</h3>
                        <h4>级别2323&emsp; 积分2323</h4>
                    </div>
                </div>
            </li>
            <li>
                <div class="customer"><!-- 产品图片 -->
                    <div class="customer-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>
                    <!-- 产品描述文本 -->
                    <div class="customer-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12</h3>
                        <h4>级别2323&emsp; 积分2323</h4>
                    </div>
                </div>
            </li>
            <li>
                <div class="customer"><!-- 产品图片 -->
                    <div class="customer-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>
                    <!-- 产品描述文本 -->
                    <div class="customer-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12</h3>
                        <h4>级别2323&emsp; 积分2323</h4>
                    </div>
                </div>
            </li>

        </ul>
    </section>
</template>

<script>
    export default {
        name: "set-manager"
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/style/app";
    @import "../../../assets/style/manager-system";
    //顾客管理模块
    .customer-manager {
        margin-top: torem($MS10);
        padding: torem($MS10);
        background: $MSBF;
        @include fz($MSF14);
        .customer-info {
            text-align: left;
            padding: torem($MS5) 0;
        }
        .customer {
            padding: torem($MS10) 0;
            @include flexBox;
            border-top: 1px solid $MSBD;
            .customer-head {
                width: torem($MSWH64);
                height: torem($MSWH64);
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .customer-content {
                position: relative;
                flex: 1;
                margin-left: torem($MS10);
                h3 {
                    @include fz($MSF14);
                    @include textOverFlow;
                }
                h4 {

                    @include fz($MSF12);
                    @include mscb;
                    @include textOverFlow;

                }
            }
        }
    }
</style>