<template>
        <div class="manufacturer">
                <header-set></header-set>
                <header-nav></header-nav>
        </div>
</template>

<script>

        import headerSet from '@/components/header-set.vue'
        import headerNav from '@/components/header-nav.vue'
        export default {
                data () {
                        return {
                        }
                },
                components: {
                        headerSet,
                        headerNav
                }
        }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
        .manufacturer {
        }
</style>
