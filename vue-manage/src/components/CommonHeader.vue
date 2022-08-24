<template>
    <!-- 主体部分一定放在header标签内，不然不能运行，目前还不清楚原因，有可能是因为这一部分最终是在el-header中调用的，所以这里也要放在header标签中 -->
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 将访问过的路径设置成面包屑 -->
            <el-breadcrumb separator="|">
                <el-breadcrumb-item 
                v-for="item in tags" 
                :key="item.path" 
                :to="{path: item.path}"
                >
                    {{item.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown size="mini">
                <span>
                    <img class="user" :src="userImg" alt="用户头像">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CommonHeader",
    data() {
        return {
            userImg: require("../assets/images/user.png")
        }
    },
    methods: {
        handleMenu() {
            // 翻转侧边栏收起与展开的状态
            this.$store.commit('collapseMenu')
        },
        logout() {
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            this.$router.push('/login')
        },
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    }
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    // 下面这一行的作用是让标签和头像分别位于最左边和最右边的位置
    justify-content: space-between;
    align-items: center;
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 20px;
    }
}
.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
h3 {
    color: #fff;
}
</style>