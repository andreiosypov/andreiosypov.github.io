import './assets/main.css';

import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.VITE_NODE_ENV !== 'production',
  use: [apiPlugin],
});

app.mount('#app');
