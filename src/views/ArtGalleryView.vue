<template>
  <div className="gallery-container view">
    <h1>Art Gallery</h1>
    <div v-if="loading" class="loader"></div>
    <ArtGallery v-else :images="images" />
  </div>
</template>

<script>
import ArtGallery from '@/components/ArtGallery.vue';
import { useStoryblokApi } from '@storyblok/vue';

export default {
  name: 'ArtGalleryView',
  components: { ArtGallery },
  data: function () {
    return {
      images: [],
      loading: false,
    };
  },
  mounted: function () {
    this.getImages();
  },
  methods: {
    getImages: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/', {
        version: 'published',
        cv: Date.now(),
        per_page: 100,
        starts_with: 'artwork/',
        sort_by: 'content.order:asc,content.price:desc',
      });
      const formattedImages = resp.data.stories.map((image) => ({
        name: image.name,
        src: image.content.image.filename,
      }));
      this.images = formattedImages;
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
