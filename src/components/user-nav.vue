<template>
        <section class="user-nav">
                <!--子导航-->
                <div>
                        <ul class="sub-nav">
                                <li @click="toggleTabs('collection')">BB收藏</li>
                                <li @click="toggleTabs('bargain')">BB谈价</li>
                                <li @click="toggleTabs('meOrder')">我的订单</li>
                        </ul>
                        <div :is="currentView" keep-view></div>
                </div>
        </section>
</template>

<script>
        import bargain from '@/views/stockGoods/childen/bargain.vue'
        import collection from '@/views/stockGoods/childen/collection.vue'
        import meOrder from '@/views/stockGoods/childen/meOrder.vue'
        export default {
                data () {
                        return {
                                currentView: "collection"
                        }
                },
                components: {
                        bargain,
                        collection,
                        meOrder
                },
                methods: {
                        toggleTabs(tabText){
                                this.currentView = tabText;
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../assets/style/app";

        .user-nav {
                /*导航*/
                .nav {
                        @include flexBox;
                        margin-top: torem(30px);
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
                        }
                        li:first-of-type {
                                margin-left: 0;
                        }
                }
                /*用户信息*/
                .user {
                        padding: torem(10px);
                        @include flexBox;
                        width: 100%;
                        /*头像*/
                        .user-head {
                                float: left;
                                @include wh(torem(100px), torem(100px));
                                img {
                                        @include wh(100%, 100%);
                                }
                        }
                        /*信息*/
                        .user-info {
                                position: relative;
                                flex: 1;
                                -webkit-box-flex: 1;
                                margin-left: torem(20px);
                                .user-name {
                                        color: $C333;
                                        @include fz(30);
                                        font-weight: bold;
                                }
                                .user-level {
                                        position: absolute;
                                        bottom: 0;
                                }
                        }
                        /*设置*/
                        .user-set {
                                .btn-setting {
                                        width: torem(64px);
                                        height: torem(64px);
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
                        margin-bottom: torem(30px);
                        li {
                                flex: 1;
                                display: inline-block;
                                background: $BGFFF;
                                padding: .5rem 0;
                                text-align: center;
                        }
                        li:nth-of-type(2) {
                                margin: 0 torem(20px);
                        }
                }
        }
</style>
