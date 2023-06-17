<template>
  <div className="blog-container view">
    <h1>Dev Blog</h1>
    <div v-if="loading" class="loader"></div>
    <Blog v-else :posts="posts" />
  </div>
</template>

<script>
import Blog from '@/components/Blog.vue';
import { useStoryblokApi } from '@storyblok/vue';

export default {
  name: 'DevBlogView',
  components: { Blog },
  data: function () {
    return {
      posts: [],
      loading: false,
    };
  },
  mounted: function () {
    this.getPosts();
  },
  methods: {
    getPosts: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/', {
        version: 'published',
        cv: Date.now(),
        per_page: 100,
        starts_with: 'dev-blog/',
        sort_by: 'created_at:desc',
      });
      const formattedPosts = resp.data.stories.map((post) => ({
        title: post.name,
        summary: post.content.summary,
        image: post.content.image ? post.content.image.filename : '',
        content: post.content.content,
      }));
      this.posts = formattedPosts;
      this.loading = false;
    },
  },
};
</script>

<style>
@media (max-width: 1024px) {
  h1 {
    text-align: center;
    padding: 1rem;
  }
}
</style>
