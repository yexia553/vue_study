<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover" style=" margin-top: 20px">
                <div class="user">
                    <img :src="userImg" alt="用户头像">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2022-05-10</span></p>
                    <p>上次登录地点：<span>上海</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px; height: 460px;">
                <el-table :data="tableData">
                    <!-- tableData中数据的key要和prop的值对应 -->
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :label="val" :prop="key">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px;">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
                    <div class="detail">
                        <p class="num">￥{{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            userImg: require('../../src/assets/images/user.png'),
            tableData: [
                {
                name: 'oppo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                },
                {
                name: 'vivo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                },
                {
                name: '苹果',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                },
                {
                name: '小米',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                },
                {
                name: '三星',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                },
                {
                name: '魅族',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
                }
            ],
            tableLabel: {
                name: '品牌',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买',
            },
            countData: [
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
            ],
        }
    }
}
</script>