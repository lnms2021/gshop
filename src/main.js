/* 
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 关闭生产提示
Vue.config.productionTip = false;
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})
