<template>

    <!--加盟管理-->
    <div class="item join-manager">
        <div class=" join-info">
            <span>会员数：233人</span>
            <span>会员收益：232323元</span>
            <span>收益分配：232323元</span>
        </div>
        <ul class="join-item accordion" id="accordion">
            <li>
                <div class="join j-down-menu link">
                    <!-- 产品图片 -->
                    <div class="join-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>

                    <!-- 产品描述文本 -->
                    <div class="join-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12 </h3>
                        <h4>级别2323&emsp; 积分2323 身份：一级会员</h4>
                    </div>
                    <a class="btn-show ">展开
                        <img class="arrow-right" src="../../../assets/image/arrow.svg" alt="">
                    </a>
                </div>
                <div class="join-detail j-join-detail-show submenu">
                    <div class="clearfix">
                        <div class="fl">
                            <button class="btn">认证信息</button>
                            <button class="btn">进入微商城</button>
                        </div>
                        <button class="btn fr">管理</button>
                    </div>
                    <div>
                        <h2>加盟状态：</h2>
                        <p>认证（2017-12-23 23:12通过）</p>
                        <p>培训（2017-12-23 23:12通过）</p>
                    </div>
                    <div>
                        <h2>加盟费：</h2>
                        <p>2017-23-12 充值 200元</p>
                        <p>2017-23-12 充值 200元</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="join j-down-menu link">
                    <!-- 产品图片 -->
                    <div class="join-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>

                    <!-- 产品描述文本 -->
                    <div class="join-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12 </h3>
                        <h4>级别2323&emsp; 积分2323 身份：一级会员</h4>
                    </div>
                    <a class="btn-show ">展开
                        <img class="arrow-right" src="../../../assets/image/arrow.svg" alt="">
                    </a>
                </div>
                <div class="join-detail j-join-detail-show submenu">
                    <div class="clearfix">
                        <div class="fl">
                            <button class="btn">认证信息</button>
                            <button class="btn">进入微商城</button>
                        </div>
                        <button class="btn fr">管理</button>
                    </div>
                    <div>
                        <h2>加盟状态：</h2>
                        <p>认证（2017-12-23 23:12通过）</p>
                        <p>培训（2017-12-23 23:12通过）</p>
                    </div>
                    <div>
                        <h2>加盟费：</h2>
                        <p>2017-23-12 充值 200元</p>
                        <p>2017-23-12 充值 200元</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="join j-down-menu link">
                    <!-- 产品图片 -->
                    <div class="join-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>

                    <!-- 产品描述文本 -->
                    <div class="join-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12 </h3>
                        <h4>级别2323&emsp; 积分2323 身份：一级会员</h4>
                    </div>
                    <a class="btn-show ">展开
                        <img class="arrow-right" src="../../../assets/image/arrow.svg" alt="">
                    </a>
                </div>
                <div class="join-detail j-join-detail-show submenu">
                    <div class="clearfix">
                        <div class="fl">
                            <button class="btn">认证信息</button>
                            <button class="btn">进入微商城</button>
                        </div>
                        <button class="btn fr">管理</button>
                    </div>
                    <div>
                        <h2>加盟状态：</h2>
                        <p>认证（2017-12-23 23:12通过）</p>
                        <p>培训（2017-12-23 23:12通过）</p>
                    </div>
                    <div>
                        <h2>加盟费：</h2>
                        <p>2017-23-12 充值 200元</p>
                        <p>2017-23-12 充值 200元</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "set-manager"
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/style/app";
    @import "../../../assets/style/manager-system";
    //加盟管理模块
    .join-manager {
        margin-top: torem($MS10);
        padding: torem($MS10);
        background: $BGFFF;
        @include fz($MSF14);
        .join-info {
            text-align: left;
            padding:torem($MS5) 0;
        }
        .join-item {
            li {
                .join {
                    position: relative;
                    padding: torem($MS10) 0;
                    @include flexBox;
                    border-top: 1px solid #ddd;
                    .join-head {
                        width: torem($MSWH64);
                        height: torem($MSWH64);
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .join-content {
                        position: relative;
                        display: inline-block;
                        width: 60%;
                        margin-left: torem($MS10);
                        h3 {
                            @include fz(14px);
                            @include textOverFlow;
                        }
                        h4 {
                            @include fz(12px);
                            @include mscb;
                            @include textOverFlow;
                        }
                    }
                    .btn-show {
                        position: absolute;
                        right: 0;
                        color: #0099ff;
                        padding: .3rem 0 .3rem .6rem;
                        align-self: center;
                        .arrow-right {
                            display: inline-block;
                            width: .5rem;
                            height: .5rem;
                            margin-top: -.2rem;
                            transition: all 0.4s;
                        }
                    }
                }
                .join-detail {
                    display: none;
                    padding: .6rem;
                    width: 100%;
                    background: #F2F2F2;
                    font-size: .6rem;
                    h2 {
                        font-weight: bold;
                        font-size: .7rem;
                        padding: .4rem 0;
                    }
                    p {
                        line-height: 1.5;
                    }
                }
            }
        }

    }
</style>