<template>
  <main>
    <div v-if="loading" class="loader"></div>
    <Post v-else :post="post" />
  </main>
</template>

<script>
import Post from '@/components/Post.vue';
import { useStoryblokApi } from '@storyblok/vue';

export default {
  name: 'ArtGalleryView',
  components: { Post },
  data: function () {
    return {
      post: {},
      loading: false,
    };
  },
  mounted: function () {
    this.getOverviewPost();
  },
  methods: {
    getOverviewPost: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/overview');
      console.log(resp);
      const formattedPost = {
        title: resp.data.story.content.title,
        image: resp.data.story.content.image.filename,
        summary: resp.data.story.content.summary,
        body: resp.data.story.content.body,
      };
      this.post = formattedPost;
      this.loading = false;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
