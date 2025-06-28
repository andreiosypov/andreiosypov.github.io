<template>
  <div class="gallery">
    <h2>Featured</h2>
    <div class="games">
      <div v-for="game in top3games" :key="game.name" class="game">
        <a :href="game.url"><img v-if="game.images && game.images.length" :src="game.images[0]" /></a>
        <div class="Summary">
          <a :href="game.url"
            ><h2 class="singleLineText">{{ game.name }}</h2>
          </a>
          <div v-if="game.tags && game.tags.length" class="tags">
            <div v-for="tag in game.tags" :key="tag" class="singleLineNoOverflow">#{{ tag }}</div>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="summary" v-html="formatContent(game.summary)" />
        </div>
      </div>
    </div>
    <h2 v-if="otherGames.length">Game Jams</h2>
    <div class="games">
      <div v-for="game in otherGames" :key="game.name" class="game">
        <a :href="game.url"><img v-if="game.images && game.images.length" :src="game.images[0]" /></a>
        <div class="Summary">
          <a :href="game.url"
            ><h2 class="singleLineText">{{ game.name }}</h2>
          </a>
          <div v-if="game.tags && game.tags.length" class="tags">
            <div v-for="tag in game.tags" :key="tag" class="singleLineNoOverflow">#{{ tag }}</div>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="summary" v-html="formatContent(game.summary)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownToHtml } from '@/common';
import DOMPurify from 'dompurify';

export default {
  name: 'GameGallery',
  props: {
    games: { type: Array, default: () => [] },
  },
  computed: {
    top3games: function () {
      if (this.games && this.games.length) {
        if (this.games.length < 4) return this.games;
        else return this.games.slice(0, 3);
      }
      return [];
    },
    otherGames: function () {
      if (this.games && this.games.length && this.games.length > 3) return this.games.slice(3);
      return [];
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
.gallery > h2 {
  text-align: center;
}

.games {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.game {
  width: 300px;
  padding: 20px 0;
}

.game img {
  width: 100%;
  height: 169px;
  object-fit: contain;
  display: block;
  background: black;
}

.game .Summary h2 {
  font-size: 1rem;
  padding: 5px 0 0 0;
}

.game .tags {
  display: flex;
  gap: 10px;
  overflow: hidden;
  color: var(--vt-c-green);
  font-size: 0.8em;
}

.game .summary {
  font-size: 0.7em;
}

.singleLineText {
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
}

.singleLineNoOverflow {
  max-width: 100%;
  white-space: nowrap;
  display: block;
}

@media (max-width: 1024px) {
  .gallery {
    justify-content: center;
  }
}
</style>
