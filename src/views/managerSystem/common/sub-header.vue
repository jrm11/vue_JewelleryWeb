<template>
    <section class="tab">
        <div class="tabList ">
            <ul class="clearfix">
                <li @click="tab('setManager')">管理设置</li>
                <li @click="tab('customerManager')">顾客管理</li>
                <li @click="tab('memberManager')">会员管理</li>
                <li @click="tab('partnerManager')">合伙管理</li>
                <li @click="tab('joinManager')">加盟管理</li>
            </ul>
        </div>
        <div :is="currentView" keep-view></div>

    </section>

</template>

<script>
    import setManager from '@/views/managerSystem/components/set-manager.vue';
    import customerManager from '@/views/managerSystem/components/customer-manager.vue';
    import memberManager from '@/views/managerSystem/components/member-manager.vue';
    import partnerManager from '@/views/managerSystem/components/partner-manager.vue';
    import joinManager from '@/views/managerSystem/components/join-manager.vue';

    export default {
        data() {
            return {
                currentView: "setManager"
            }
        },
        components: {
            setManager,
            customerManager,
            memberManager,
            partnerManager,
            joinManager

        },
        methods: {
            tab(view) {
                this.currentView = view;
            }
        }
    }

    $(function () {
        let flag = true;
        $(".j-title-modify").on("click", function () {
            if (flag) {
                $(".j-title-input").attr("disabled", false);
                $(this).html("完成");
            } else {
                $(".j-title-input").attr("disabled", true);
                $(this).html("修改");
            }
            flag = !flag;
        });

        let flag1 = true;

        $(document).on("click", ".j-modify", function () {
            if (flag1) {
                $(this).parent().parent().find(".level-item input").attr("disabled", false);
                $(this).html("完成");
            } else {
                $(this).parent().parent().find(".level-item input").attr("disabled", true);
                $(this).html("修改");
            }

            flag1 = !flag1;
        });


    })
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/style/app";
    .accordion li.open .btn-show img {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    .tab {
        margin-top: torem(15px);
        width: 100%;
        font-size: torem(14px);
        .tabList {
            ul {
                margin: 0 auto;
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                li {
                    flex: 1;
                    cursor: pointer;
                    text-align: center;
                    margin-left: torem(5px);
                    background: #fff;
                    padding: torem(10px) 0;
                }
                li:first-of-type {
                    margin-left: 0;
                }
            }
        }
    }
</style>