import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga-vars.css';

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(Oruga)
app.mount('#app')
