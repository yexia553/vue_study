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
            <el-card shadow="hover" style="margin-top:20px; height:30px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :label="val" :prop="key"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px;">
            <el-card shadow="never" :body-style="{display: 'flex', padding: '0',}">
                <el-card class="slaes-info" v-for="item in countData" :key="item.name" >
                    <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i> -->
                    <component class="icons" :is="item.icon"></component>
                </el-card>
            </el-card>

        </el-col>
    </el-row>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent ({
    setup() {
        const tableData = [
            {
                name: 'Python',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'C',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'Java',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'Golang',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'Vue',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            },
            {
                name: 'React',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
            }
        ]

        const tableLabel = {
            name: '课程',
            todayBuy: '今日购买',
            monthBuy: '本月购买',
            totalBuy: '总购买',
        }

        const countData = [
            {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "今日收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "今日未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            },
            {
                name: "本月支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "本月收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "本月未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            },
        ]

        let getImgSrc = () => {
            return new URL("../../assets/images/user.png", import.meta.url).href;
        }

        return {
            getImgSrc,
            tableData,
            tableLabel,
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
    .slaes-info{
    }
}
</style>