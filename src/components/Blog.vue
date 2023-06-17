<template>
  <div class="blog">
    <Post v-for="post in posts" :key="post.uid" :post="post" />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'Blog',
  components: { Post },
  props: {
    posts: { type: Array, default: () => [] },
  },
};
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 1024px) {
  .blog {
    justify-content: center;
  }
}
</style>
