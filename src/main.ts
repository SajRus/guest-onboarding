import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        open_dor: 'Open Gate',
        welcome: "Welcome!",
        welcome_message: "It's a pleasure for us to have you as our Guest!",
        insert_code: "Insert the code provided to you by the host",
        code: "Insert the code",
        confirm_code: "Confirm"
      }
    },
    it: {
      message: {
        open_dor: 'Apri Cantello',
        welcome: 'Benvenuto!',
        welcome_message: "è un piacere per noi avervi come ospiti!",
        insert_code: "Inserisci il codice che vi è arrivato",
        code: "Inserisci il codice",
        confirm_code: "Conferma"
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')