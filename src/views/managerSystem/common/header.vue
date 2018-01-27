<template>
    <div class="header">
        <ul class="clearfix">
            <li>店铺管理</li>
            <li>统销管理</li>
            <li>谈价订单</li>
            <li>分销押定</li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/style/app";

    .header {
        ul {
            font-size: torem(14px);
            @include flexBox;
            text-align: center;
            margin-top: 10px;
            li {
                flex: 1;
                background: #ff6600;
                color: #fff;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                padding: .4rem 0;
                margin-left: .2rem;
            }
            li:first-child {
                margin-left: 0;
            }
        }
    }
</style>