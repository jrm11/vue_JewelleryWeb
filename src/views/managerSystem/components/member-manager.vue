<template>
    <!--成员管理-->
    <div class="item member-manager">
        <div class="member-info">
            <span>会员数：233人</span>
            <span>会员收益：2323元</span>
            <span>收益分配：2323元</span>
        </div>
        <ul>
            <li>
                <div class="member"><!-- 产品图片 -->
                    <div class="member-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>
                    <!-- 产品描述文本 -->
                    <div class="member-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12 </h3>
                        <h4>级别2323&emsp; 积分2323 身份：一级会员</h4>
                    </div>
                    <a href="member-manager_detail.html" class="btn btn-manager">管理</a>
                </div>
            </li>
            <li>
                <div class="member"><!-- 产品图片 -->
                    <div class="member-head">
                        <img src="../../../assets/image/avatar.png" alt="">
                    </div>
                    <!-- 产品描述文本 -->
                    <div class="member-content">
                        <h3>微信呢称&emsp;注册2017｜12｜23 34:12 </h3>
                        <h4>级别2323&emsp; 积分2323 身份：一级会员</h4>
                    </div>
                    <a href="member-manager_detail.html" class="btn btn-manager">管理</a>
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

.member-manager {
    margin-top: torem($MS10);
    padding: torem($MS10);
    background: $MSBF;
    @include fz($MSF14);
    .member-info {
        text-align: left;
        padding:torem($MS5) 0;
    }
    .member {
        position: relative;
        padding: torem($MS10) 0;
        @include flexBox;
        border-top: 1px solid #ddd;
        .member-head {
            width: torem($MSWH64);
            height: torem($MSWH64);
            img {
                width: 100%;
                height: 100%;
            }
        }

        .member-content {
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
        .btn-manager {
            position: absolute;
            right: 0;
            align-self: center;
        }
    }

}
</style>