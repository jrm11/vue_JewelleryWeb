<template>
        <section class="index">
                <header class="header clearfix">
                        <div class="fl">
                                <h2 class="title">珠宝饰界学院</h2>
                        </div>

                        <div class="fr menu" @click="change">
                                <img src="../../assets/image/menu.svg" alt="" v-show="flag">
                                <img src="../../assets/image/close.svg" alt="" v-show="!flag">
                        </div>
                        <!--下拉菜单-->
                        <div class="down-menu" v-show="!flag">
                                <ul>
                                        <li>BAA<i class="arrow-right"></i></li>
                                        <li>日报<i class="arrow-right"></i></li>
                                        <li>双证<i class="arrow-right"></i></li>
                                        <li>规则<i class="arrow-right"></i></li>
                                        <li>全网统销<i class="arrow-right"></i></li>
                                        <li>国际钻石<i class="arrow-right"></i></li>
                                        <li>黄金工厂<i class="arrow-right"></i></li>
                                        <li>世界工厂<i class="arrow-right"></i></li>
                                        <li>自助<i class="arrow-right"></i></li>
                                </ul>
                        </div>
                </header>
                <main-fragment></main-fragment>
        </section>
</template>

<script>
        import mainFragment from '@/components/main-fragment.vue'
        export default {
                data () {
                        return {
                                msg: '',
                                flag: true,

                        }
                },
                components:{
                        mainFragment,
                },
                methods: {
                        change(){
                                this.flag = !this.flag;
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../assets/style/app";

        .index {
                position: relative;
                height:100%;
                /*头部*/
                .header {
                        height: torem(46px);
                        line-height: torem(46px);
                        background: $BG409EFF;
                        color: #fff;
                        position: fixed;
                        width: 100%;
                        top: 0;
                        z-index: 1;
                        .title {
                                margin-left: torem(20px);
                                @include fz(18px);
                        }
                        .menu {
                                @include ct;
                                right: torem(20px);
                                img {
                                        @include wh(torem(25px),torem(25px))
                                }
                        }
                        .down-menu {
                                position: absolute;
                                top: torem(46px);
                                width: 100%;
                                z-index: 1;
                                background: $BGFFF;
                                color: $C333;
                                li {
                                        position: relative;
                                        height: torem(38px);
                                        line-height: torem(38px);
                                        padding: 0 torem(10px);
                                        border-bottom: 1px solid #ddd;
                                        .arrow-right {
                                                position: absolute;
                                                top: 50%;
                                                right: torem(10px);
                                                transform: translateY(-50%);
                                                @include wh(torem(20px), torem(20px));
                                                background: url("../../assets/image/arrow-right.svg") no-repeat right center;
                                                display: inline-block;
                                        }
                                }
                                li:active {
                                        background: #DDDDDD;
                                }
                        }
                }
        }
</style>
