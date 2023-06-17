<template>
  <Suspense>
    <template #default>
      <div>
        <div class="header">
          <RouterLink to="/" class="noBackground">
            <div class="appLogoContainer">
              <span class="AppLogo">
                <AppLogo />
              </span>
            </div>
          </RouterLink>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/artgallery">Art Gallery</RouterLink>
            <RouterLink to="/devblog">Dev Blog</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </nav>
        </div>
        <RouterView class="content" />
        <FooterLayout />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

import AppLogo from '@/assets/logo.vue';
import FooterLayout from './components/FooterLayout.vue';

export default {
  name: 'App',
  components: { RouterLink, RouterView, AppLogo, FooterLayout },
};
</script>

<style scoped>
.header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-border);
  margin-bottom: 1rem;
}

.appLogoContainer {
  padding: 0 1rem;
}

.AppLogo {
  fill: var(--color-logo);
}

nav {
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  min-height: calc(100vh - 130px);
  padding: 0 2rem;
}

@media (max-width: 800px) {
  .header {
    flex-direction: column;
  }

  .appLogoContainer {
    display: flex;
    justify-content: center;
  }

  nav {
    margin-top: 0;
    padding-top: 0;
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  .content {
    min-height: calc(100vh - 170px);
  }
}
</style>
