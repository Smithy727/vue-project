import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'

import { projectFirestore } from './Firebase/config.js'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$firestore = projectFirestore

app.mount('#app')
