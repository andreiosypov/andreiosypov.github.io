<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div class="opening">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="formatContent(post.summary)" />
      <div>
        <img :src="post.image" />
      </div>
    </div>
    <div v-for="item in post.body" :key="item._uid">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="item.type === 'Markdown'" v-html="formatContent(item.body)" />
    </div>
  </div>
</template>

<script>
import { markdownToHtml } from '@/common';
import DOMPurify from 'dompurify';

export default {
  name: 'Post',
  props: {
    post: { type: Object, default: () => ({}) },
  },
  computed: {
    formattedSummary: function () {
      return DOMPurify.sanitize(markdownToHtml(this.post.summary));
    },
    formattedContent: function () {
      return DOMPurify.sanitize(markdownToHtml(this.post.content));
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
.post {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 20vw;
}

.opening {
  display: grid;
  grid-template-columns: 3fr 2fr;
  font-size: 24px;
  gap: 30px;
}

.opening div {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .opening {
    font-size: 20px;
  }
}

@media (max-width: 800px) {
  .opening {
    font-size: 18px;
  }

  .post {
    margin: 0;
  }
}

@media (max-width: 600px) {
  .opening {
    font-size: 14px;
  }
}
</style>
