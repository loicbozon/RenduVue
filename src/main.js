import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routeur from './routeur'

createApp(App).use(routeur).mount('#app')
