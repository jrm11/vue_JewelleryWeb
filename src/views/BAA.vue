<template>
        <div class="decorated">
                <ul>
                        <li v-for="item in list">
                                <div class="clearfix">
                                        <div class="fl">
                                                <h2>{{item.title}}</h2>
                                                <h4>最强信用{{item.content}}</h4>
                                        </div>
                                </div>
                                <i class="arrow-right"></i>
                        </li>

                </ul>
        </div>
</template>

<script>
        export default {
                data () {
                        return {
                                list:[
                                        {title:"重磅1",content:"最新科技，人人可以秒死珠宝"},
                                        {title:"重磅2",content:"最强信用：珠宝市值、让市场说话"},
                                        {title:"重磅3",content:"最狠对接：国际钻石、黄金工厂、到家"},
                                        {title:"重磅4",content:"最高境界：分享工厂、武商沟通"},
                                        {title:"未来已到来"},
                                        {title:"BAA珠宝国际"},
                                        {title:"三大风投、联袂出手"},
                                        {title:"传奇发明家重出江湖"},
                                ]
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../../assets/style/app";
        /*主体内容*/
        .decorated {

                ul{
                        li{
                                position: relative;
                                margin-bottom:torem(15px);
                                padding:torem(15px);
                                background: #FFFFFF;
                                h4{
                                        color: #ff0000;
                                }
                                .arrow-right {
                                        position: absolute;
                                        top: 50%;
                                        right: torem(10px);
                                        transform: translateY(-50%);
                                        @include wh(torem(20px), torem(20px));
                                        background: url("../../../assets/image/arrow-right.svg") no-repeat right center;
                                        display: inline-block;
                                }
                        }

                }
        }
</style>
