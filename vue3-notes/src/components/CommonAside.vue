<template>
    <el-aside>
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :collapse-transition="false"
            active-text-color="#ffd04b">
            <h3>后台管理</h3>
            <el-menu-item :index="item.path + ''" v-for="item in list" :key="item.label" @click="handleClick(item)">
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>


<script>
import { useRouter } from 'vue-router'
export default {
    setup() {
        const list = [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home',
                url: '/home'
            },
            {
                path: '/other',
                name: 'other',
                label: '其它',
                icon: 'location',
                url: 'other'
            },
        ];
        const router = useRouter()
        const handleClick = (item) => {
            router.push({
                name: item.name
            });
        }

        return {
            list,
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

.el-menu-vertical-demo {
    width: 100%;
    border-right: none;

    h3 {
        color: #fff;
        text-align: center;
        margin-top: 10px;
    }
}
</style>