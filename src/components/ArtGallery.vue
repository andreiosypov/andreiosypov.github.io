<template>
  <div class="gallery">
    <div v-for="image in images" :key="image.src" class="image">
      <img :src="image.src" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtGallery',
  props: {
    images: { type: Array, default: () => [] },
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.image {
  max-width: 300px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
