<template>
    <el-form :model="formData" status-icon class="login-container" ref="formRef">
        <h3 class="login-title">登陆</h3>
        <el-form-item label="用户名" prop="username" label-width="80px">
            <el-input type="input" auto-complete="off" placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="80px">
            <el-input type="password" auto-complete="off" placeholder="请输入密码" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item class="login-submit">
            <el-button type="primary" class="login-submit" @click="login()">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { getCurrentInstance, reactive } from 'vue';
import { defineComponent } from 'vue-demi';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';  //这是用来在账号密码错误时弹窗提示的
import store from '../../store/index.js';



export default defineComponent({
    setup() {
        const { proxy } = getCurrentInstance() // 注意这里，下面login函数会用到
        const router = useRouter()
        // vue3中获取表单数据需要使用reactive
        const formData = reactive({
            username: '',
            password: '',
        });

        // 使用异步的方式请求api
        let login = async () => {
            let res = await proxy.$api.login(formData) // 通过$api来调用login
            if (res.status === 200) {
                store.commit('setAccessToken', res.data.access)
                store.commit('setRefreshToken', res.data.refresh)
                store.commit('updateLastRefreshTime')
                router.push({
                    name: 'main'
                })
            } else {
                ElMessageBox.alert('账号密码错误，请重试！')
                router.push({
                    name: 'login'
                })
            }
        };

        return {
            formData,
            login,
        }
    }

})
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
    justify-content: center;
}
</style>