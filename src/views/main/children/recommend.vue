<template>
        <section class="recommend">
                <div class="content">
                        <div>
                                <button class="btn">发展我的下级统销商</button>
                        </div>
                        <div>
                                <button class="btn">厂商保荐</button>
                        </div>
                        <div>
                                <button class="btn">关闭</button>
                        </div>
                </div>
        </section>
</template>

<script>
        export default {
                data () {
                        return {}
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../../assets/style/app";

        .recommend {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                padding-top: 100px;
                .content {
                        width: 50%;
                        height: 300px;
                        background: #fff;
                        margin: 0 auto;
                        text-align: center;
                        .btn{
                                padding: torem(6px) torem(12px);
                                background: $BG409EFF;
                                color: $CFFF;
                                border: none;
                                @include borderRadius(torem(5px));
                                @include fz(12px);
                                margin-top:torem(20px);
                        }
                }
        }
</style>
