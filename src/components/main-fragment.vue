<template>
        <section class="box">
                <div :is="currentView" keep-view></div>
                <section class="main-fragment">

                        <!--fragment-->
                        <ul>
                                <li @click="toggleTabs('decorated')">
                                        <div class="item">
                                                <img src="../assets/image/user.svg" alt="">
                                                <p>饰界</p>
                                        </div>
                                </li>
                                <li @click="toggleTabs('recommend')">
                                        <div class="item">
                                                <img src="../assets/image/user.svg" alt="">
                                                <p>保荐</p>
                                        </div>
                                </li>
                                <li @click="toggleTabs('msg')">
                                        <div class="item">
                                                <img src="../assets/image/user.svg" alt="">
                                                <p>消息</p>
                                        </div>
                                </li>
                                <li @click="toggleTabs('manufacturer')">
                                        <div class="item">
                                                <img src="../assets/image/user.svg" alt="">
                                                <p>厂商</p>
                                        </div>
                                </li>
                                <li @click="toggleTabs('duke')">
                                        <div class="item">
                                                <img src="../assets/image/user.svg" alt="">
                                                <p>城主</p>
                                        </div>
                                </li>
                        </ul>
                </section>
        </section>
</template>

<script>
        //消息
        import msg from '@/views/main/children/msg.vue'
        //城主
        import duke from '@/views/main/children/duke.vue'
        //厂商
        import manufacturer from '@/views/main/children/manufacturer.vue'
        //保荐
        import recommend from '@/views/main/children/recommend.vue'
        //饰界
        import decorated from '@/views/main/children/decorated.vue'
        export default {
                data () {
                        return {
                                currentView: "decorated"
                        }
                },
                components: {
                        msg,
                        duke,
                        manufacturer,
                        recommend,
                        decorated,
                },
                methods: {
                        toggleTabs(tabText){
                                console.log(tabText)
                                this.currentView = tabText;
                        }
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../assets/style/app";

        .box {
                height: 100%;
                position: relative;
                top: torem(46px);
                margin-bottom: torem(60px);
                z-index: 0;

                .main-fragment {
                        /*底部fragment*/
                        position: fixed;
                        width: 100%;
                        bottom: 0;
                        height: torem(60px);
                        background: $BG409EFF;
                        color: $CFFF;
                        @include fz(12px);
                        text-align: center;
                        ul {
                                height: 100%;
                                @include flexBox;
                                li {
                                        flex: 1;
                                        position: relative;
                                        .item {
                                                @include center;
                                                p {
                                                        margin-top: torem(5px);
                                                }
                                        }
                                }

                                li:active {
                                        background: #5e68ff;
                                }
                        }

                }
        }

</style>
