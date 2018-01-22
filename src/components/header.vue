<template>
        <div class="header">
                <h3 class="title">{{headTitle}}</h3>
                <a class="btn-back" href="#"><img src="../assets/image/back.svg" alt=""></a>
        </div>
</template>

<script>
        export default {
                data () {
                        return {
                                msg: ''
                        }
                },
                props: ['headTitle']
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        @import "../assets/style/app";
        .header {
                position: relative;
                background: $BG409EFF;
                color: $CFFF;
                line-height: torem(46px);
                .title {
                        text-align: center;
                        font-size: fz(19px);
                        line-height: torem(46px);
                }

                .btn-back{
                        position: absolute;
                        left:0;
                        top:50%;
                        transform: translateY(-50%);
                        width: 80px;
                        height: 100%;
                        img{
                                width: 48px;
                                height: 48px;
                                margin-left:16px;
                                margin-top:16px;
                        }
                }

                .btn-back:active{
                        background: #3b6cff;
                }
        }
</style>
