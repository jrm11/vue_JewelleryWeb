<template>
    <!--管理设置-->
    <section class="set-manager">
        <div class="title">
            <div class="clearfix title-content">
                <span class="fl">顾客身份购物折扣：增加</span>
                <div class="fr">
                    <input class="form-control j-title-input" type="text" value="10"
                           disabled="true"><span>%&emsp;</span>
                    <button class="btn j-title-modify">修改</button>
                </div>
            </div>
        </div>
        <div class="level1 level">
            <h3 class="clearfix">
                <span class="fl">一级：当会员积分低于3时</span>
                <button class="btn fr j-modify">修改</button>
            </h3>
            <div class="level-item">
                <div class="level-item-content">自购折扣：
                    <div class="fr">
                        <input class="form-control" type="text" value="10"
                               disabled="true">折
                    </div>
                </div>

            </div>
            <div class="level-item">会员推介奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介人购物提成佣金的：
                <div class="fr">
                    <input class="form-control" type="text" value="10" disabled="true">%
                </div>
            </div>
            <div class="level-item">推介人合伙奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介加盟城主奖加盟金的：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">%
                </div>
            </div>
        </div>
        <div class="level2 level">
            <h3 class="clearfix">
                <span class="fl">二级：当会员积分为4--10分时</span>
                <button class="btn fr j-modify">修改</button>
            </h3>
            <div class="level-item">
                <div class="level-item-content">自购折扣：
                    <div class="fr"><input class="form-control" type="text" value="10"
                                           disabled="true">折
                    </div>
                </div>

            </div>
            <div class="level-item">会员推介奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介人购物提成佣金的：
                <div class="fr">
                    <input class="form-control" type="text" value="10" disabled="true">%
                </div>
            </div>
            <div class="level-item">推介人合伙奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介加盟城主奖加盟金的：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">%
                </div>
            </div>
        </div>
        <div class="level3 level">
            <h3 class="clearfix">
                <span class="fl">三级：当会员积分为11分以上时</span>
                <button class="btn fr j-modify">修改</button>
            </h3>
            <div class="level-item">
                <div class="level-item-content">自购折扣：
                    <div class="fr"><input class="form-control" type="text" value="10"
                                           disabled="true">折
                    </div>
                </div>

            </div>
            <div class="level-item">会员推介奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介人购物提成佣金的：
                <div class="fr">
                    <input class="form-control" type="text" value="10" disabled="true">%
                </div>
            </div>
            <div class="level-item">推介人合伙奖：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">元
                </div>
            </div>
            <div class="level-item">推介加盟城主奖加盟金的：
                <div class="fr"><input class="form-control" type="text" value="10"
                                       disabled="true">%
                </div>
            </div>
        </div>
        <div class="join1 level">
            <h3 class="clearfix">
                <span class="fl">加入城主合伙人</span>
                <button class="btn fr j-modify">修改</button>
            </h3>
            <div class="level-item">合伙人分摊城主加盟金(一次性)：
                <div class="fr">
                    <input class="form-control" type="text" value="10"
                           disabled="true">元
                </div>
            </div>
            <div class="level-item">合伙人每月保底起步为(月)：
                <div class="fr">
                    <input class="form-control" type="text" value="10"
                           disabled="true">元
                </div>
            </div>
            <div class="level-item">合伙人推介收益超过保底值后再提成：
                <div class="fr">
                    <input class="form-control" type="text"
                           value="10"
                           disabled="true">%
                </div>
            </div>
            <div class="level-item">合伙人自购折扣：
                <div class="fr">
                    <input class="form-control" type="text"
                           value="10"
                           disabled="true">折
                </div>
            </div>
        </div>
        <div class="join2 level">
            <h3 class="clearfix">
                <span class="fl">加入下级城主</span>
                <button class="btn fr j-modify">修改</button>
            </h3>
            <div class="level-item">合伙人分摊城主加盟金(一次性)：
                <div class="fr">
                    <input class="form-control" type="text" value="10"
                           disabled="true">元
                </div>
            </div>
            <div class="level-item">合伙人每月保底起步为(月)：
                <div class="fr">
                    <input class="form-control" type="text" value="10"
                           disabled="true">元
                </div>
            </div>
            <div class="level-item">合伙人推介收益超过保底值后再提成：
                <div class="fr">
                    <input class="form-control" type="text"
                           value="10"
                           disabled="true">%
                </div>
            </div>
            <div class="level-item">合伙人自购折扣：
                <div class="fr">
                    <input class="form-control" type="text"
                           value="10"
                           disabled="true">折
                </div>
            </div>
        </div>
        <div class="rules-detail level">
            <h3>规则说明</h3>
            <div class="rules-detail-item">
                自购折扣：为产品标签价的折扣比，在城主押订推介折扣中取优自动选择
            </div>
            <div class="rules-detail-item">
                会费提成：在城主收益中提取金额数（不大于城主收益金额）
            </div>
            <div class="rules-detail-item">
                推介购物提成：按城主佣金（折后获得）比例数在城主佣金中提取
            </div>
            <div class="rules-detail-item">推介合伙提成：在城主收益合伙人加盟分摊费中提取
            </div>
            <div class="rules-detail-item">推介加盟提成：在城主收益加盟金返奖金额中的提取
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../../../assets/style/app";
    @import "../../../assets/style/manager-system";
    //管理设置模块
    .set-manager {
        margin-top: torem($MS10);
        padding: torem($MS10);
        background: $MSBF;
        @include fz($MSF14);
        /*标题内容*/
        .title {
            padding: torem($MS10);
            border-bottom: 1px solid $BDDD;
            .title-content {
                input {
                    vertical-align: top;
                }
                span {
                    display: inline-block;
                    padding: torem($MS5) 0;
                }
            }
        }
        /*等级*/
        .level {
            border-bottom: 1px solid $BDDD;
            padding: torem($MS10);
            h3 {
                padding-bottom:torem($MS10);
                font-weight: bold;
                @include fz($MSF16);
            }
            .level-item {
                padding: torem($MS5) 0;
                line-height: 2;
                color: $MSC666;
                border-top: 1px dashed $BDDD;
            }
            span {
                font-weight: normal;
                @include fz($MSF14);
            }
        }

        input {
            @include fz($MSF14);
            width: torem(40px);
            padding: torem($MS5) torem($MS10);
        }

        /*规则详情*/
        .rules-detail {
            .rules-detail-item {
                margin-bottom: torem(20px);
                line-height: 1.5;
            }
        }
    }


</style>