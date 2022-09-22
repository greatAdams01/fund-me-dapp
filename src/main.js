import { createApp } from 'vue'
import App from './App.vue'

import Moralis from './plugins/moralis.js'
import moralisPlug from './plugins/moralisPlug'

createApp(App).use(moralisPlug).use(Moralis).mount('#app')
