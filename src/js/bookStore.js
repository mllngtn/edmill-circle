import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './src/router/router.js';

import App from './src/App.vue';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#edmill-book-store");
