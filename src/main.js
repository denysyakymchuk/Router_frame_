import { createApp } from 'vue'
import App from './App.vue'
import Net from "@/components/Net.vue";
import Setting from "@/components/Setting.vue";
import Status from "@/components/Status.vue";
import System from "@/components/System.vue";
import Wireless from "@/components/Wireless.vue";
import MyComponent from "@/components/MyComponent.vue";
import './assets/main.css'
import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";
import Settings from "@/components/Settings.vue";
import Quick from "@/components/Quick.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/settings', component: Settings },
        { path: '/quick', component: Quick },
        { path: '/', component: MyComponent },
        { path: '/status', component: Status },
        { path: '/net', component: Net },
        { path: '/system', component: System },
        { path: '/wireless', component: Wireless },
        { path: '/setting', component: Setting },
    ],
})

// 5. Create and mount the root instance.
createApp(App).use(router).mount('#app')
