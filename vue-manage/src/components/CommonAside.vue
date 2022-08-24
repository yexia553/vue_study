<template>
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    :collapse="isCollapse" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b"
    >
        <h3>{{ isCollapse ? "后台" : "通用后台管理" }}</h3>

        <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickMenu(item)">
            <!-- 下面两行代码在引用属性的方式上有所不同，注意 -->
            <i :class="`el-icon-${item.icon }`"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
                <el-menu-item @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    height: 100%;
    border: none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>

<script>
export default {
    data() {
        return {
            menu: [
                // {
                //     path: '/',
                //     name: 'home',
                //     label: '首页',
                //     icon: 's-home',
                //     url: '/Home/Home'
                // },
                // {
                //     path: '/mall',
                //     name: 'mall',
                //     label: '商品管理',
                //     icon: 'video-play',
                //     url: '/MallManage/MallManage'
                // },
                // {
                //     path: '/user',
                //     name: 'user',
                //     label: '用户管理',
                //     icon: 'user',
                //     url: '/UserManage/UserManage'
                // },
                // {
                //     label: '其它',
                //     name: 'other',
                //     icon: 'location',
                //     children: [
                //         {
                //             path: '/pageOne',
                //             name: 'pageOne',
                //             label: '页面1',
                //             icon: 'setting',
                //             url: '/Other/PageOne'
                //         },
                //         {
                //             path: '/pageTwo',
                //             name: 'pageTwo',
                //             label: '页面2',
                //             icon: 'setting',
                //             url: '/Other/PageTwo'
                //         },
                //     ]
                // },
            ]
        };
    },
    methods: {
        clickMenu(item) {
            this.$router.push({
                name: item.name,
            })
            this.$store.commit("selectMenu", item)
        },
    },
    computed: {
        noChildren() {
            return this.syncMenu.filter(item => !item.children)
        },
        hasChildren() {
            return this.syncMenu.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        },
        syncMenu() {
            return this.$store.state.tab.menu
        }
    }
}
</script>
