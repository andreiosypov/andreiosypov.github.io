<template>
  <a :href="postUrl">
    <div class="postPreview">
      <div class="image">
        <img :src="post.image" />
      </div>
      <div class="opening">
        <h2>{{ post.title }}</h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="formatContent(post.summary)" />
      </div>
    </div>
  </a>
</template>

<script>
import { markdownToHtml } from '@/common';
import DOMPurify from 'dompurify';

export default {
  name: 'PostPreview',
  props: {
    post: { type: Object, default: () => ({}) },
  },
  computed: {
    postUrl: function () {
      if (this.post && this.post.url) return this.post.url;
      return '';
    },
  },
  methods: {
    formatContent: function (content) {
      if (!content) return content;
      return DOMPurify.sanitize(markdownToHtml(content));
    },
  },
};
</script>

<style>
.postPreview {
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-size: 18px;
  gap: 30px;
  background: var(--color-background-soft);
  border-radius: 10px;
  border: 1px solid var(--color-border);
  padding: 20px;
  height: 200px;
  overflow: hidden;
}

.postPreview .opening {
  display: flex;
  flex-direction: column;
  gap: 0px;
  color: var(--color-text);
}

.postPreview .opening h2 {
  padding-top: 0;
}

.postPreview .image {
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .postPreview .opening {
    font-size: 16px;
  }
}

@media (max-width: 800px) {
  .postPreview .opening {
    font-size: 14px;
  }

  .post {
    margin: 0;
  }
}

@media (max-width: 600px) {
  .postPreview {
    grid-template-columns: 1fr 2fr;
    padding: 10px;
  }
}
</style>
