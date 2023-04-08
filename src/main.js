import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/main.scss"

const app = createApp(App)

app.use(router)
app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info)
}

app.mount('#app')
