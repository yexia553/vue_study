<template>
    <el-aside :width="$store.state.collapse ? '60px' : '180px'">
        <el-menu 
        class="el-menu-vertical-demo"
        background-color="#545c64" 
        text-color="#fff"
        :collapse="$store.state.collapse"
        :collapse-transition="false"
        active-text-color="#ffd04b">
            <h3>{{$store.state.collapse ? '后台' : '后台管理'}}</h3>
            <el-menu-item :index="item.path+''" v-for="item in noChildern()" :key="item.label" @click="handleClick(item)">
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
                <el-menu-item-group v-for="(subItem, subIndex) in item.children" :index="subItem.path+''" :key="subItem.label" >
                    <el-menu-item :index="subIndex+''" @click="handleClick(subItem)">{{subItem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>


<script>
import { useRouter } from 'vue-router'
export default {
    setup() {
        const list = [
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: '/user'
            },
            {
                label: '其它',
                name: 'other',
                icon: 'location',
                path: '/other',
                children: [
                    {
                        path: '/other/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: '/other/page1'
                    },
                    {
                        path: '/other/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: '/other/page2'
                    },
                ]
            },
        ];

        const noChildern = () => {
            return list.filter((item) => !item.children)
        };

        const hasChildern = () => {
            return list.filter((item) => item.children)
        };

        const router = useRouter()
        const handleClick = (item) => {
            router.push({
                name: item.name
            })
        };
        
        return {
            noChildern,
            hasChildern,
            handleClick,
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
.el-menu-vertical-demo{
    width: 100%;
    border-right: none;
    h3{
        color: #fff;
        text-align: center;
        margin-top: 10px;
    }
}
</style>