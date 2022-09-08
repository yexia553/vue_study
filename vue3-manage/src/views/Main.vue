<template>
    <el-container class="common-layout">
        <common-aside />
        <el-container class="r-container">
            <common-header />
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
.r-container {
    display: flex;
    flex-wrap: wrap;
}
</style>