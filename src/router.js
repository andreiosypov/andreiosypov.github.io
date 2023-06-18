import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artgallery',
      name: 'artgallery',
      component: () => import('@/views/ArtGalleryView.vue'),
    },
    {
      path: '/devblog',
      name: 'devblog',
      component: () => import('@/views/DevBlogView.vue'),
    },
    {
      path: '/devblog/:post_slug',
      name: 'post',
      props: true,
      component: () => import('@/components/Post.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
