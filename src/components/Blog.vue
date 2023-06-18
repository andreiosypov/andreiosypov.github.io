<template>
  <div class="blog">
    <PostPreview v-for="post in posts" :key="post.uid" :post="post" />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue';

export default {
  name: 'Blog',
  components: { PostPreview },
  props: {
    posts: { type: Array, default: () => [] },
  },
};
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 20vw;
  justify-content: center;
}

@media (max-width: 1024px) {
  .blog {
    justify-content: center;
  }
}
</style>
