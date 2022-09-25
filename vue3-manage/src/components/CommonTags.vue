<template>
    <el-tag 
    closable 
    v-for="item in getStoredMenus()"
    :key = itme.name
    >item.label</el-tag>
</template>
<script>
import { defineComponent } from 'vue-demi';
import { useStore } from 'vuex';
export default defineComponent({
    setup() {
        const store = useStore();
        const getStoredMenus = () => {
            return store.state.storedMenus;
        }
        return {
            getStoredMenus,
        }
    }
})
</script>
<style>

</style>