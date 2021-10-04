import { createApp } from 'vue'
import App from './App.vue'
import '../packages/theme-chalk/index.scss'
import UI from '../packages'
createApp(App).use(UI).mount('#app')
