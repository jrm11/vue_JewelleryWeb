<template>
    <section>
        <header-top></header-top>
        <sub-header-top></sub-header-top>
    </section>
</template>

<script>
    import headerTop from './common/header';
    import subHeaderTop from './common/sub-header'
    export default {
        data() {
            return {
                currentView:"setManager"
            }
        },
        components: {
            headerTop,
            subHeaderTop
        },

    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../assets/style/reset.scss";
    @import "../../assets/style/common.scss";
    @import "../../assets/style/main.scss";

    $p6: .6rem 0;
    @mixin borderb {
        border-bottom: 1px solid #DDDDDD;
    }

    @mixin flexBox {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
    }

    @mixin textOverflow {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .imgr {
        transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transition: all 0.4s;
    }



    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .active {
        background: #0099ff;
        color: #ff6600;
    }

    /* 淡入 */

    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .cur {
        display: block !important;
    }

    .accordion li.open .btn-show img {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .tabCh {
        margin-top: .6rem;
        .item {
            display: none;
            padding: .6rem;
            background: #fff;
            font-size: .6rem;

            .level {
                @include borderb;
                padding: $p6;
            }

            h3 {
                padding-bottom: .6rem;
                font-weight: bold;
                font-size: .7rem;
            }
            span {
                height: 1.5rem;
                line-height: 1.5rem;
            }
            .level-item {
                padding: .2rem 0;
                line-height: 2;
                color: #666;
                border-top: 1px dashed #d0d0d0;
            }

            input {
                width: 2rem;
                margin: 0 .2rem;
                padding: .1rem .4rem;
            }
        }
    }

</style>