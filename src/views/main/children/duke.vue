<template>
        <div class="duke">
                <header-set></header-set>
        </div>
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
        .duke {
        }
</style>
