<template>
    <div class="returnUp">
        <el-button type="info" @click="returnUp">返回</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        returnUp(){
            this.$router.push('/')
    },
    }
}
</script>
<style lang="less" scoped>

</style>