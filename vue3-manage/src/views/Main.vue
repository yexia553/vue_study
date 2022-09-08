<template>
    <el-main>
        <div>
            <el-container class="common-layout">
                <common-aside />
                <el-container>
                    <common-header />
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </el-main>
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