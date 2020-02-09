import Vue from 'vue'
import VueRouter from 'vue-router'
import addStu from '../views/addStudent'
import stuList from '../views/studentList.vue'

Vue.use(VueRouter)

const routes = [
 {
   path:'/addStudent',
   name:'addStu',
   component:addStu
 },
 {
  path:'/studentList',
  name:'stuList',
  component:stuList
 },
 {   
  path:'*',
  redirect:'/studentList'
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
