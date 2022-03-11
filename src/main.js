import { createApp } from 'vue'
import App from './App.vue'

import Moralis from './plugins/moralis.js'

createApp(App).use(Moralis).mount('#app')
