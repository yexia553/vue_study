<template>
    <div class="tags">
        <el-tag 
        v-for="(tag, index) in tags" 
        :key="tag.name" 
        :closable="tag.name !== 'home'"
        :effect="$route.name === tag.name ? 'dark' : 'plain'" 
        size="small" 
        @click="changeMenu(tag)"
        @close="handleClose(tag, index)"
        >
            {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CommonTag',
    data() {
        return{}
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        }),
    },
    methods: {
        changeMenu(item) {
            this.$router.push({
                name: item.name
            })
        },
        handleClose(tag, index) {

        }
    },
}

</script>

<style lang="less" scoped>
.tags {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>