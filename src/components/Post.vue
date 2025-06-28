<template>
  <div class="post">
    <h1>{{ loadedPost.title }}</h1>
    <div class="opening">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="formatContent(loadedPost.summary)" />
      <div class="image">
        <img :src="loadedPost.image" />
      </div>
    </div>
    <div v-for="item in loadedPost.body" :key="item._uid">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="item.component === 'Markdown'" v-html="formatContent(item.body)" />
    </div>
  </div>
</template>

<script>
import { markdownToHtml } from '@/common';
import { useStoryblokApi } from '@storyblok/vue';
import DOMPurify from 'dompurify';

export default {
  name: 'Post',
  props: {
    post: { type: Object, default: () => ({}) },
  },
  data: function () {
    return {
      loadedPost: this.post,
    };
  },
  mounted: function () {
    if (this.$route.params.post_slug) {
      this.getPostFromSlug();
    }
  },
  methods: {
    formatContent: function (content) {
      if (!content) return content;
      return DOMPurify.sanitize(markdownToHtml(content));
    },
    getPostFromSlug: async function () {
      this.loading = true;
      const storyblokApi = useStoryblokApi();
      const resp = await storyblokApi.get('cdn/stories/devblog/' + this.$route.params.post_slug);
      const formattedPost = {
        title: resp.data.story.content.title,
        image: resp.data.story.content.image.filename,
        summary: resp.data.story.content.summary,
        body: resp.data.story.content.body,
      };
      this.loadedPost = formattedPost;
      this.loading = false;
    },
  },
};
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 20vw;
}

.post .opening {
  display: grid;
  grid-template-columns: 3fr 2fr;
  font-size: 24px;
  gap: 30px;
}

.post .opening div {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .post .opening {
    font-size: 20px;
  }
}

@media (max-width: 800px) {
  .post {
    margin: 0;
  }

  .post .opening {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  .post .opening {
    font-size: 14px;
    display: flex;
    flex-direction: column-reverse;
  }

  .post .opening .image {
    padding: 0 30px;
  }
}
</style>
