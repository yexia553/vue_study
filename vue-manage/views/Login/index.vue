<template>
    <el-form :model=form status-icon :rules=rules class="login-container">
        <h3 class="login-title">系统登陆</h3>
        <el-form-colum label="用户名" prop="username" label-width="80px">
            <el-input type="input" auto-complete="off" v-model="form.username" placeholder="请输入用户名">
            </el-input>
        </el-form-colum>
        <el-form-colum label="密码" prop="password" label-width="80px">
            <el-input type="password" auto-complete="off" v-model="form.password" placeholder="请输入密码">
            </el-input>
        </el-form-colum>
        <el-form-colum class="login-submit">
            <el-button type="primary" @click="login" class="login-submit">登录</el-button>
        </el-form-colum>

    </el-form>
</template>

<script>
import { getMenu } from "../../api/data";

export default {
    data() {
        return {
            form: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    {required:true, message:"请输入用户名", trigger:blur},
                    {min: 3, message: "长度最小为3"}
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: blur },
                    { min: 3, message: "长度最小为3" }
                ],
            },
        }
    },
    methods: {
        login() {
            // 模拟生成token
            // const token = "xhibgoiphnsadpojfg6sg2bhpias89"
            // this.$store.commit('setToken', token)
            // this.$router.push({name:'home'})

            getMenu(this.form).then(res => {
                console.log('1')
                if (res.data.code === 200){
                    console.log("2")
                    this.$store.commit('clearMenu')
                    console.log("3")
                    this.$store.commit('setMenu', res.data.menu)
                    console.log("4")
                    this.$store.commit('setToken', res.data.token)
                    console.log("5")
                    this.$store.commit('addMenu', this.$router)
                    console.log("6")
                    this.$router.push({name:'home'})
                    console.log("7")
                }else {
                    this.$message.warning("登录失败！")
                }
            })

        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

.login-submit {
    margin: 10px auto 0 auto;
}
</style>