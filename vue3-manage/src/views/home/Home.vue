<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user-info">
                    <img class="user-image" :src="getImgSrc()" alt="用户头像">
                    <div class="display-info">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间： 2022-10-10</p>
                    <p>上次登录地点：上海</p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top:20px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="name" label="课程"></el-table-column>
                    <el-table-column prop="todayBuy" label="今日购买"></el-table-column>
                    <el-table-column prop="monthBuy" label="本月购买"></el-table-column>
                    <el-table-column prop="totalBuy" label="总购买"></el-table-column>
                </el-table>
            </el-card>
        </el-col>

        <el-col :span="16" style="margin-top: 20px;">
            <div class="nums">
                <el-card 
                :body-style="{display: 'flex', padding: 0}"
                v-for="item in countData"
                :key="item.name">
                     <component 
                        class="icons" 
                        :is="item.icon"
                        :style="{background: item.color}"
                    ></component>
                    <div class="detail">
                        <p class="txt">{{item.name}}</p>
                        <p class="num">￥：{{item.value}}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { 
    defineComponent, 
    getCurrentInstance, 
    onMounted, 
    ref 
} from 'vue'
import axios from 'axios'


export default defineComponent ({
    setup() {
        // const tableData = [
        //     {
        //         name: 'Python',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     },
        //     {
        //         name: 'C',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     },
        //     {
        //         name: 'Java',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     },
        //     {
        //         name: 'Golang',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     },
        //     {
        //         name: 'Vue',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     },
        //     {
        //         name: 'React',
        //         todayBuy: 100,
        //         monthBuy: 300,
        //         totalBuy: 800
        //     }
        // ]

        // vue3中实现js中的数据双向绑定需要使用ref
        let tableData = ref([])

        const countData = [
            {
                name: "今日支付订单",
                value: 1234,
                icon: "SuccessFilled",
                color: "#2ec7c9",
            },
            {
                name: "今日收藏订单",
                value: 210,
                icon: "StarFilled",
                color: "#ffb980",
            },
            {
                name: "今日未支付订单",
                value: 1234,
                icon: "GoodsFilled",
                color: "#5ab1ef",
            },
            {
                name: "本月支付订单",
                value: 1234,
                icon: "SuccessFilled",
                color: "#2ec7c9",
            },
            {
                name: "本月收藏订单",
                value: 210,
                icon: "StarFilled",
                color: "#ffb980",
            },
            {
                name: "本月未支付订单",
                value: 1234,
                icon: "GoodsFilled",
                color: "#5ab1ef",
            },
        ]

        let getImgSrc = () => {
            return new URL("../../assets/images/user.png", import.meta.url).href;
        }

        // const getTableData = async () => {
        //     await axios.get('/home/getData').then((res) => {
        //         console.log(res);
        //         if (res.status === 200){
        //             // .value是为了实现数据双向绑定而需要的
        //             tableData.value = res.data.tableData;
        //         }

        //     })
        // }

        // vue3中全局使用二次封装的axios的方式
        const { proxy } = getCurrentInstance()
        const getTableData = async () => {
            let res = await proxy.$api.getHomeTableData();
            tableData.value = res.data.tableData
        }

        onMounted(() => {
            getTableData()
        })
        return {
            getImgSrc,
            tableData,
            countData,
        }
    }
})
</script>

<style lang="less" scoped>
.home{
    .user-info{
        display: flex;
        border-bottom: 1px solid #ccc;
        // align-items: center;
        .user-image{
            margin-left: 30px;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            margin-bottom: 15px;
        }
        .display-info{
            margin-left: 60px;
            padding-top: 50px;
        }
    }
    .login-info{
        margin-left: 30px;
        margin-top: 15px;
        line-height: 200%;
    }
    .nums{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card {
            width: 31%;
            margin-bottom: 20px;
            .icons {
                width: 24%
            }
            .detail {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .num{
                    font-size: 26px;
                }
                .txt{
                    color: #999;
                    text-align: center;
                }
            }
        }
    }
}
</style>