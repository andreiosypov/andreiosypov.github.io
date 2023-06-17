<template>
  <div className="gallery-container">
    <h1>Art Gallery</h1>
    <div>
      <ArtGallery :images="images" />
    </div>
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
    };
  },
  mounted: function () {
    this.getImages();
  },
  methods: {
    getImages: async function () {
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
