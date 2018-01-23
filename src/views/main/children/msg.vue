<template>
        <section class="msg">
                <header-set></header-set>
                <div class="title">
                        <h1>消息</h1>
                        <button>新建消息</button>
                </div>
        </section>
</template>

<script>
        import headerSet from '@/components/header-set.vue'
        export default {
                data () {
                        return {
                                msg: ''
                        }
                },
                components: {
                        headerSet,
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../../../assets/style/app";

        .msg {
                .title {
                        position: relative;
                        text-align: center;
                        background: #77773b;
                        padding: torem(15px) 0;
                        color: $CFFF;
                        button {
                                right: torem(10px);
                                @include ct;
                                padding: torem(6px) torem(12px);
                                background: $BG409EFF;
                                color: $CFFF;
                                border: none;
                        }
                }
        }
</style>
