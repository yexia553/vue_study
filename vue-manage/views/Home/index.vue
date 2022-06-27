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
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            userImg: require('../../src/assets/images/user.png')
        }
    }
}
</script>