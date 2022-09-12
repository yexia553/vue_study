<template>
    <el-header>
        <div class="l-content">
            <el-button size="small">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="getImgSrc()" alt="头像" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>我的</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
export default {
    setup() {
        const getImgSrc = () => {
            // 参考https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
            console.log(import.meta.url)
            console.log(new URL("../assets/images/user.png", import.meta.url))
            return new URL("../assets/images/user.png", import.meta.url).href;
        };
        return {
            getImgSrc
        }
    }
}

</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #333;
}
.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

</style>