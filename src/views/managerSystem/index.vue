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
                currentView: "setManager"
            }
        },
        components: {
            headerTop,
            subHeaderTop
        },

    }
    $(function () {
        //下拉菜单
        let Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            let links = this.el.find('.link');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        };

        Accordion.prototype.dropdown = function (e) {
            alert(111)
            let $el = e.data.el,
                $this = $(this),
                $next = $this.next();
            $next.slideToggle();
            $this.parent().toggleClass('open');
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            }
        };

        let accordion = new Accordion($('#accordion'), false);

    })

</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../assets/style/reset.scss";
    @import "../../assets/style/common.scss";
    @import "../../assets/style/main.scss";

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


</style>