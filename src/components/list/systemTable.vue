

<template>
   <table>
    <thead>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>住址</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody id="table-body">
        <tr v-for="(item,index) in list" :key="index">
            <td>{{item.sNo}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex?"女":"男"}}</td>
            <td>{{item.email}}</td>
            <td>{{item.birth}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.address}}</td>
            <td>
                <button class="btn edit" @click="editStu(item)">编辑</button>
                <button class="btn del" @click="delStu(item.sNo)">删除</button>
            </td>
        </tr>
    </tbody>
        </table>
</template>

<script>
import Axios from "axios";
import {mapState , mapActions, mapMutations} from 'vuex'
export default {

    created(){
      this.getStuList(1)
    },
    methods:{
      editStu(stu){
        this.setShowModal(true);
        this.setEditStu(stu);

      },
      delStu(sno){
          this.$store.dispatch('detStu',sno)
      },
      ...mapActions(['getStuList']),
      ...mapMutations(['setShowModal',"setEditStu"])
    },
    computed:{
        ...mapState(['list'])
    }
}
</script>

<style>

</style>