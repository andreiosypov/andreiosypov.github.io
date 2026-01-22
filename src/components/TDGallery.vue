<template>
  <div class="gallery">
    <div class="projects">
      <div v-for="project in projects" :key="project.name" class="project">
        <a :href="project.url">
          <img :src="project.image" />
        </a>
        <div class="Summary">
          <a :href="project.url">
            <h2 class="singleLineText">{{ project.name }}</h2>
          </a>
          <div class="client">{{ project.client }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TDGallery',
  props: {
    projects: { type: Array, default: () => [] },
  },
};
</script>

<style>
.gallery > h2 {
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project {
  width: 300px;
  padding: 20px 0;
}

.project img {
  width: 100%;
  height: 169px;
  object-fit: contain;
  display: block;
  background: black;
}

.project .Summary h2 {
  font-size: 1rem;
  padding: 5px 0 0 0;
}

.singleLineText {
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .gallery {
    justify-content: center;
  }
}
</style>
