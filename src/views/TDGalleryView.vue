<template>
  <div className="gallery-container view">
    <h1>Pipeline TD Projects</h1>
    <div v-if="loading" class="loader"></div>
    <TDGallery v-else :projects="projects" />
  </div>
</template>

<script>
import TDGallery from '@/components/TDGallery.vue';
import { useStoryblokApi } from '@storyblok/vue';

export default {
  name: 'TDGalleryView',
  components: { TDGallery },
  data: function () {
    return {
      projects: [],
      loading: false,
    };
  },
  mounted: function () {
    this.getProjects();
  },
  methods: {
    getProjects: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/', {
        version: 'published',
        cv: Date.now(),
        per_page: 100,
        starts_with: 'td/',
        sort_by: 'content.order:asc',
      });
      const formattedProjects = resp.data.stories.map((project) => ({
        name: project.name,
        client: project.content.client,
        image: project.content.image,
        url: project.content.url.url,
        order: parseInt(project.content.order),
      }));
      //@TODO: remove sort later, currently necessary since order is returned as a string
      // which means the default content order sort_by doesn't work as expected
      formattedProjects.sort(function (a, b) {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      });
      this.projects = formattedProjects;
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
