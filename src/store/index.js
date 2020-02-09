import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api';
// import
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    size:5,
    totalPage:0,
    showModal:false,
    editStu:{},
    nowPage:1,
    searchValue:"",
    count:0
  },
  mutations: {
    setList(state,list){
      state.list = list;
    },
    setTotalPage(state,count){
      state.totalPage = Math.ceil(count/state.size);
      state.count = count
    },
    setShowModal(state,bool){
      state.showModal = bool;
    },
    setEditStu(state,stu){
      state.editStu = stu;
    },
    setNowPage(state,page){
      if(page === 0 && state.nowPage < state.totalPage){
        state.nowPage ++;state
      }else if(page === -1 && state.nowPage > 1){
        state.nowPage --;       
      }else if(page != 0 && page != -1){
        state.nowPage = page;
      }
    },
    setSearchValue(state,v){
      console.log(v)
      state.searchValue = v
    }
  },
  actions: {
    getStuList({commit,state}){
      api.findByPage(state.nowPage,state.size).then(data=>{
        commit('setList',data.data.data.findByPage)
        commit('setTotalPage',data.data.data.cont)
        console.log(data)
      })
    },
    updateStu({commit,state},options){
      return api.updateStu(options).then(data =>{
        if(data.data.status == "success") {
          commit('setShowModal',false);
          Object.assign(state.editStu,options)
          return{
            type:'success',
            msg:data.data.msg,
            duration:2000
          }
        }else{
          return{
            type:'success',
            msg:data.data.msg,
            duration:2000
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    turnPage({dispatch,commit,state},page){
      commit('setNowPage',page);
      if(state.searchValue){
        dispatch('search',{
          sex:-1,
          search:state.searchValue,
          page:state.nowPage,
          size:state.size
        })
      }else{
        dispatch("getStuList");
      }
    },
    searchStu({dispatch,commit,state}){
      commit("setNowPage",1);
      if(state.searchValue){
        dispatch('search',{
          search:state.searchValue,
          page:1,
          size:state.size,
          sex:-1
        })
      }else{
        dispatch("getStuList")
      }
     
    },
    search({commit,state},options){
      api.searchStu(options).then(data =>{
        commit("setList",data.data.data.searchList);
        commit("setTotalPage",data.data.data.cont)

      })
    },
    detStu({dispatch,state},sNo){
      api.delStu(sNo).then(_=>{
        if(state.totalPage === Math.ceil((state.count-1)/state.size)){
          dispatch('turnPage',state.nowPage)
        }else{
          dispatch('turnPage',-1)
        }
      })
    }
  },
  modules: {
  }
})
