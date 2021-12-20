/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter  from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                // 元数据,默认返回值为false
                showFooter:true,
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                // 元数据,默认返回值为false
                showFooter:true,
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                // 元数据,默认返回值为false
                showFooter:true,
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                // 元数据,默认返回值为false
                showFooter:true,
            }
        },{
            // 重定向
            path:'/',
            redirect:'/msite'
        },{
            path:'/login',
            component:Login
        },
    ]
})