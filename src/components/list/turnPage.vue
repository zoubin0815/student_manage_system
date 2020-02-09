<template>
  
  <div class="page">
    <ul class="turn-page" >
      
        <li class="prev" 
        @click="turn(-1)">&lt;</li>
        <template v-if="totalPage < 8">
          <li :class="nowPage == i?'active-page number':'number'"
          v-for="i in totalPage" 
          :key="i" 
          @click="turn(i)" 
          >{{i}}</li>
        </template>
        <template v-else>
        <!-- 1,2,3,4,5,6 -->
        <template v-if="nowPage <=4">
           <li :class="nowPage == i?'active-page number':'number'"
            v-for="i in 6" 
            :key="i" 
            @click="turn(i)">
            {{i}}
           </li>

        </template>
        <!-- 1... -->
        <template  v-if="nowPage >4">
            <li :class="nowPage == 1?'active-page number':'number'"
            @click="turn(1)">
            {{1}}
           </li>
           <li>...</li>

        </template>
        <!-- n-2,n-1,n,n+1,n+2 -->
        <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
            <li :class="nowPage == nowPage + k - 3?'active-page number':'number'"
            v-for="k in 5" 
            :key="k" 
            @click="turn(nowPage + k - 3)">
            {{nowPage + k - 3}}
           </li>
        </template>
        <!-- ...n -->
        <template  v-if="nowPage <= totalPage - 4 ">
            <li>...</li>
            <li :class="nowPage == totalPage?'active-page number':'number'"
            @click="turn(totalPage)">
            {{totalPage}}
           </li>
          
        </template>
        <!-- n-5,n-4,n-3,n-2,n-1,n-1 -->
        <template v-if="nowPage > totalPage - 4 ">
          <li :class="nowPage == totalPage - 6 + j?'active-page number':'number'"
            v-for="j in 6" 
            :key="j" 
            @click="turn(totalPage - 6 + j)">
            {{totalPage - 6 + j}}
           </li>


        </template>
      </template>
        <li class="next" 
        @click="turn(0)">&gt;</li>

    </ul>
  </div>
</template>
        
      
      

<script>
export default {
 computed:{
   nowPage(){
     return this.$store.state.nowPage
   },
   totalPage(){
     return this.$store.state.totalPage
   }
 },
  methods:{
    turn(page){
      this.$store.dispatch('turnPage',page)
    }
    
  }
}
</script>

<style scoped>
.active-page{
  color:#409eff;
}
.turn-page>li{
  float: left;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
  list-style: none;
  cursor: pointer;
  margin-left: 10px
  /* background: white */
}


</style>