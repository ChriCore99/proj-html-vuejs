import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faPercent } from '@fortawesome/free-solid-svg-icons'  // icone solid
// import {  } from '@fortawesome/free-regular-svg-icons'  // icone regular
// import { } from '@fortawesome/free-brands-svg-icons'  // loghi dei brand

library.add( faPlus, faPercent ) // icone da inserire

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')