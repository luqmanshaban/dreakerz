import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import store from './stores/index'
import App from './App.vue'
import router from './router'
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const token = localStorage.getItem('token')
if(token){
  store.commit('auth/setIsLoggedIn', true)
}else {
  store.commit('auth/setIsLoggedIn', false)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')
