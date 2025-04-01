import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* 引入 Font Awesome 的 CSS */
import '@fortawesome/fontawesome-free/css/all.css'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPlus, faTrashCan, faCircle)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
