<template>
    <el-container style="height: 100%">
        <el-aside width="auto">
            <!-- 侧边栏可以看做一个公共模块，不论在什么页面都需要展示，因此做成一个component -->
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <common-tag></common-tag>
            <el-main>
                <!-- 主体区域以后会成为各个页面的展现区域，通过路由跳转实现 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'


export default {
    name: 'home',
    components: {
        CommonAside,
        CommonHeader,
        CommonTag,
    },
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #333;
}

.el-main {
    padding-top: 0%
}
</style>