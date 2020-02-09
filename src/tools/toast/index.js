import toast from "./toast.vue";
const Toast = Vue.extend(toast);
import Vue from "vue"
const types = {
    success:'√',
    fail:'x',
    info:'!'
}
export default function({type,msg,duration} = {type:'success',msg:'ok',duration:2000}){
    const app = new Toast({
        el:document.createElement('div'),
        data:{
            msg,
            typeValue:types[type],
            type
        }
    });
    document.body.appendChild(app.$el);
    setTimeout(_ => {
        app.show = false;
    },duration);
    setTimeout(_ => {
        app.flag = false;
    },duration-200)
}