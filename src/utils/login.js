export const isLogin=()=>{
    if(localStorage.getItem('token')=='zxf'){
        return true
    }else{
        return false
    }
}