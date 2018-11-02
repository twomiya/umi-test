import mockjs from'mockjs';
export default {
    // "/api/user": {name:'eee'},
    "/api/user":mockjs.mock({
         name: '@name' ,
      }),
}