import { createApp } from 'vue'
import App from './App.vue'
// import App from './base/10.hooks.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App).use(store).use(router).use(Vant).mount('#app')
