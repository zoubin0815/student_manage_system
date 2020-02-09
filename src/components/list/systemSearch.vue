<template>
  <div class="search">
      <input type="text" id="search-inp" @input="insert($event)"/> &nbsp;
      <button id="search-btn" @click="search"> 搜索</button>
  </div>
</template>

<script>
export default {
    methods:{
        insert(e){
           
            this.$store.commit('setSearchValue',e.target.value)
        },
        search(){
            this.$store.dispatch('searchStu')
        }
    },
    computed:{
        searchValue(){
            return this.$store.state.searchValue
        }
    }

}
</script>

<style>

</style>