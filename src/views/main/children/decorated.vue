<template>
        <div class="decorated">
                <!--标题-->

                <p class="title">2018/12/03 押定珠宝： 3000件/ 100万元</p>

                <!--头部选项-->
                <div class="header-item">
                        <ul class="header-item-top">
                                <li v-for="list in headListTop">
                                        <div>
                                                <img src="../../../assets/image/avatar.png" alt="">
                                                <p>{{list.text}}</p>
                                        </div>
                                </li>
                        </ul>
                        <ul class="header-item-bottom">
                                <li v-for="list in headListBottom">
                                        <div>
                                                <img src="../../../assets/image/avatar.png" alt="">
                                                <p>{{list.text}}</p>
                                        </div>
                                </li>

                        </ul>
                        <div class="btns clearfix">
                                <button class="btn fl">钻石银行</button>
                                <button class="btn fr">黄金工厂</button>
                        </div>
                </div>

                <!--制卡-->
                <div class="card">
                        <div class="clearfix action-card">
                                <span class="fl">珠宝身份证</span>
                                <span class="fr">委托制证</span>
                        </div>
                        <div class="btns">
                                <button class="btn">自制</button>
                                <button class="btn">标准</button>
                                <button class="btn">问价</button>
                        </div>
                </div>

                <!--制证查询栏-->

                <div class="certificate-search clearfix">
                        <div class="search-bar fl">
                                <input type="text" class="search-input form-control" placeholder="双证查询">
                                <img class="search-img" src="../../../assets/image/search.svg" alt="">
                        </div>
                        <button class="rules fr">制证规则</button>
                </div>

                <!--查询-->
                <div class="search">
                        <div class="clearfix seach-area">
                                <h3 class="fl title">均价评估证</h3>
                                <button class="btn-search fr">查询</button>
                        </div>
                        <div class="item">
                                <ul>
                                        <li v-for="list in searchList">
                                                <div>
                                                        <img src="../../../assets/image/avatar.png" alt="">
                                                        <p>{{list.text}}</p>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                data () {
                        return {
                                headListTop: [
                                        {text: "挂牌市场"},
                                        {text: "全网统销"},
                                        {text: "批发商城"},
                                ],
                                headListBottom: [
                                        {text: "赏金找货"},
                                        {text: "品估在线"},
                                        {text: "订制市场"},
                                ],
                                searchList: [
                                        {text: "赏金找货"},
                                        {text: "品估在线"},
                                        {text: "订制市场"},
                                ]
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../../assets/style/app";

        @mixin btnStyle {
                padding: torem(6px) torem(12px);
                background: $BG409EFF;
                color: $CFFF;
                border: none;
                @include borderRadius(torem(5px));
                @include fz(12px);
        }

        /*主体内容*/
        .decorated {
                .title {
                        text-align: center;
                        padding: torem(10px);
                }
                .header-item {
                        width: 100%;
                        padding: torem(10px) torem(30px);
                        background: $BGFFF;
                        text-align: center;
                        .header-item-top, .header-item-bottom {
                                @include flexBox;
                                margin-bottom: torem(10px);
                                li {
                                        flex: 1;
                                }
                        }

                        img {
                                @include wh(torem(50px), torem(30px))
                        }
                        p {
                                margin-top: torem(5px);
                        }
                        .btns {
                                padding: torem(10px);
                                .btn {
                                        @include btnStyle;
                                }
                        }
                }
                /*证件相关*/
                .card {
                        background: $BGFFF;
                        margin-top: torem(10px);
                        padding: torem(20px);
                        .action-card {
                                color: $C666;
                                padding-bottom: torem(15px);
                        }
                        .btns {
                                @include flexBox;
                                justify-content: space-around;
                                .btn {
                                        flex: 1;
                                        @include btnStyle;
                                }
                                .btn:nth-of-type(2) {
                                        margin: 0 torem(10px);
                                }
                        }
                }
                /*证书查询*/
                .certificate-search {
                        margin-top: torem(10px);
                        padding: torem(20px) torem(20px);
                        background: $BGFFF;
                        border-bottom: 1px solid #DDDDDD;
                        .search-bar {
                                position: relative;
                                /*搜索框*/
                                .search-input {
                                        @include borderRadius(5px);
                                        padding: torem(6px) torem(40px) torem(6px) torem(12px);
                                        border: 1px solid #DDDDDD;
                                }
                                /*搜索图片*/
                                .search-img {
                                        position: absolute;
                                        right: torem(5px);
                                        top: 50%;
                                        transform: translateY(-50%);
                                }
                        }
                        /*规则*/
                        .rules {
                                @include btnStyle;

                        }
                }

                /*查询*/
                .search {
                        padding: torem(20px);
                        background: $BGFFF;

                        .seach-area {
                                position: relative;
                                .title {
                                        color: $C666;
                                }
                                .btn-search {
                                        @include btnStyle;

                                        @include ct;
                                        right: 0;
                                }
                        }

                        .item {
                                text-align: center;
                                margin-top: torem(20px);
                                ul {
                                        @include flexBox;
                                        li {
                                                flex: 1;
                                                img {
                                                        @include wh(torem(50px), torem(30px));
                                                }
                                                p {
                                                        margin-top: torem(5px);
                                                }
                                        }
                                }
                        }
                }
        }
</style>
