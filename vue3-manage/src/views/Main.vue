<template>
    <el-container class="common-layout">
        <el-aside><common-aside /></el-aside>
        <el-container class="r-container">
            <el-header><common-header /></el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { defineComponent } from "vue-demi";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
export default defineComponent({
    components: {
        CommonHeader,
        CommonAside,
    }
})
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;
}
.r-container {
    display: flex;
    flex-wrap: wrap;
}
</style>