<template>
    <el-aside width="200px">
        <el-menu 
        class="el-menu-vertical-demo"
        background-color="#545c64" 
        text-color="#fff"
        :collapse=false
        active-text-color="#ffd04b">
            <el-menu-item :index="item.path+''" v-for="item in noChildern()" :key="item.label">
                <!-- 在vue3中动态引用icon图标 -->
                <component class="icons" :is="item.icon"></component>
                <!-- <template #title>{{item.label}}</template> -->
                <span>{{item.label}}</span>
            </el-menu-item>
            <el-sub-menu :index="item.path+''" v-for="item in hasChildern()" :key="item.label">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group v-for="(subItem, subIndex) in item.children" :index="subItem.path+''" :key="subItem.label">
                    <el-menu-item :index="subIndex+''">{{subItem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>


<script>
export default {
    setup() {
        const list = [
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: '/UserManage/UserManage'
            },
            {
                label: '其它',
                name: 'other',
                icon: 'location',
                path: '/other',
                children: [
                    {
                        path: '/pageOne',
                        name: 'pageOne',
                        label: '页面1',
                        icon: 'setting',
                        url: '/Other/PageOne'
                    },
                    {
                        path: '/pageTwo',
                        name: 'pageTwo',
                        label: '页面2',
                        icon: 'setting',
                        url: '/Other/PageTwo'
                    },
                ]
            },
        ];
        const noChildern = () => {
            return list.filter((item) => !item.children)
        };
        const hasChildern = () => {
            return list.filter((item) => item.children)
        }
        return {
            noChildern,
            hasChildern
        }
    }
}
</script>

<style lang="less" scoped>
.icons {
    width: 18px;
    height: 18px;
    margin-right: 4px;
}
</style>