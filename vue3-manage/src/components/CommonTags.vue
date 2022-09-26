<template>
    <el-tag 
    closable 
    v-for="item in getStoredMenus()"
    :key = item.name
    @click = handleTagClick(item)
    >
        {{item.label}}
    </el-tag>
</template>

<script>
import { defineComponent } from 'vue-demi';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();
        const getStoredMenus = () => {
            return store.state.storedMenus
        };
        const handleTagClick = (item) => {
            router.push({
                name: item.name
            })
        };
        return {
            getStoredMenus,
            handleTagClick,
        }
    }
})
</script>
<style lang="less" scoped>
.el-tag{
    margin-left: 10px;
    cursor: pointer;
}

</style>