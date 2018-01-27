<template>
        <div class="header-nav">
                <!--导航-->
                <ul class="nav">
                        <li>店铺管理</li>
                        <li>产品进场</li>
                        <li>我的订单</li>
                        <li>我的保荐</li>
                        <li>私人订制</li>
                        <li>BB进货</li>
                </ul>
        </div>
</template>

<script>
        export default {
                data () {
                        return {
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../assets/style/app";

        .header-nav {
                /*导航*/
                .nav {
                        @include flexBox;
                        margin-top: torem(20px);
                        li {
                                flex: 1;
                                display: inline-block;
                                background: #009966;
                                padding: torem(5px) 0;
                                color: $CFFF;
                                text-align: center;
                                border-top-left-radius: torem(10px);
                                border-top-right-radius: torem(10px);
                                margin-left: torem(5px);
                                @include fz(10px)
                        }
                        li:first-of-type {
                                margin-left: 0;
                        }
                }
        }
</style>
