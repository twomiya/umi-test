
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'mui-test2',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  routes:[
    {
      path:'/user',
      component:'../layouts/UserLayout',
      routes:[
        {path:'/user',redirect:'/user/login'},
        {path:'/user/login',component:'./User/Login'},
        {path:'/user/reg',component:'./User/Reg'}
    ]},
    {
      path:'/',
      component:'../layouts/BasicLayout',
      Routes:['src/pages/Auth'],
      routes:[
        {path:'/',redirect:'/dashboard'},
        {path:'/dashboard',component:'./Dashboard'}
      ]
    }
  ]
}
