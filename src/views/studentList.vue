<template>
    <!-- 学生列表展示区域 -->
    <div class="student-list content" id="student-list">
        <!-- <div class="search">
            <input type="text" id="search-inp">
            <button id="search-btn">搜索</button>
        </div> -->
       <system-search></system-search>
        <system-table></system-table>
        <turn-page></turn-page>
        <transition><show-modal v-if="$store.state.showModal">
        
        </show-modal></transition>
     
    </div>
</template>

<script>
import systemSearch from '../components/list/systemSearch'
import systemTable from '../components/list/systemTable'
import turnPage from '../components/list/turnPage'
import showModal from '../components/list/showModal'

export default {
    components:{
        systemSearch,
        systemTable,
        showModal,
        turnPage
    }
}
</script>

<style>
.v-enter, .v-leave-to{
    top:-100%;
    height: 0;
    opacity: 0;
}
.v-enter-to{
    top: 0;
    height: 100%;
    opacity: 1;
}
.v-enter-active, .v-leave-active{
    transition: all 0.5s;
}
</style>