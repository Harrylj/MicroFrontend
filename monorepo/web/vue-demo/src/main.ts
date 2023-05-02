import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {a,b} from 'common' // 引入common中的a,b属性

createApp(App).mount('#app')

declare global{
    interface Window{
        $wujie:{
            props:Record<string,any>
            bus:Record<string,any>
        }
    }
}

