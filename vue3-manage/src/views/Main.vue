<template>
    <div class="common-layout">
        <el-container>
            <!-- 不要嵌套两层el-aside -->
            <common-aside />
            <el-container class="r-container">
                <el-header>
                    <common-header />
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent } from "vue";
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
    height: 100%;
    & > .el-container{
        height: 100%;
        & > .el-aside{
            height: 100%;
            background: #545c64;
        }
        & > .el-container{
            &>.el-header{
                padding: 0%;
            }
        }
    }
}
// .r-container {
//     display: flex;
//     flex-wrap: wrap;
// }
</style>