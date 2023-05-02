import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {a} from 'common' // 引入common中的a属性
import App from './App.vue'
import router from './router'

import './assets/main.css'
import Wujie from 'wujie-vue3' // wujie 1.引入一下 引入对应的框架封装
// import Wujie from 'harry-wujie-vue-setup' // 替换成自己封装的wujievue组件框架(不知道为啥必须APP.vue中的WujieVue组件必须改为wujievue才可以显示) wujie 1.引入一下 引入对应的框架封装

import {bus} from 'wujie' // bus监听数据变化
bus.$on('vue3',(data:any)=>{
    console.log('主应用监听子应用触发的事件:',data)
})

const app = createApp(App)

app.use(createPinia())
app.use(router).use(Wujie) // wujie 2.注册使用 

app.mount('#app')
