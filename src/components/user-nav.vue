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
