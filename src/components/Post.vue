<template>
  <div class="post">
    <div>{{ post.title }}</div>
    <div>{{ post.image }}</div>
    <div>{{ post.summary }}</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="formattedContent" />
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
    formattedContent: function () {
      return DOMPurify.sanitize(markdownToHtml(this.post.content));
    },
  },
};
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
