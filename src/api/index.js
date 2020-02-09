import Axios from "axios";
import URLs from "./URLs";
const appkey = "DuYiyongzhi_1564986206465";
const request = Axios.create({
    baseURL:URLs.baseURL,
    params:{
        appkey
    }
})

function findByPage(page , size){
    return request.get(URLs.findByPage,{
        params:{
            page,
            size
        }
    })
}
function updateStu(options){
    return request.get(URLs.updateStu,{
        params:{
            ...options
        }
    })
}
function searchStu(options){
    return request.get(URLs.searchStu,{
        params:{
            ...options
        }
    })
}
function delStu(sNo){
    return request.get(URLs.delStu,{
        params:{
            sNo
        }
    })
}
function addStu(options){
    console.log(options)
    return request.get(URLs.addStu,{
        params:{
            ...options
        },
        
        
    })
}
export default{
    findByPage,
    updateStu,
    searchStu,
    delStu,
    addStu
}