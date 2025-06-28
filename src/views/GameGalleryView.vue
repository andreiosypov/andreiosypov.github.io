<template>
  <div className="gallery-container view">
    <h1>Games Gallery</h1>
    <div v-if="loading" class="loader"></div>
    <GameGallery v-else :games="games" />
  </div>
</template>

<script>
import GameGallery from '@/components/GameGallery.vue';
import { useStoryblokApi } from '@storyblok/vue';

export default {
  name: 'GameGalleryView',
  components: { GameGallery },
  data: function () {
    return {
      games: [],
      loading: false,
    };
  },
  mounted: function () {
    this.getGames();
  },
  methods: {
    getGames: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/', {
        version: 'published',
        cv: Date.now(),
        per_page: 100,
        starts_with: 'games/',
        sort_by: 'content.order:asc',
      });
      const formattedGames = resp.data.stories.map((game) => ({
        name: game.name,
        images: game.content.images.map((image) => image.filename),
        tags: game.content.tags,
        url: game.content.external_url.url,
        summary: game.content.summary,
        order: parseInt(game.content.order),
      }));
      //@TODO: remove sort later, currently necessary since order is returned as a string
      // which means the default content order sort_by doesn't work as expected
      formattedGames.sort(function (a, b) {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      });
      this.games = formattedGames;
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
