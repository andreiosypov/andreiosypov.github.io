<template>
  <Suspense>
    <template #default>
      <div>
        <RouterLink to="/">
          <div class="appLogoContainer">
            <span class="AppLogo">
              <AppLogo />
            </span>
          </div>
        </RouterLink>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/artgallery">Gallery</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
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
  mounted: function () {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.AppLogo {
  fill: var(--color-logo);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
  min-height: calc(100vh - 190px);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (max-width: 1024px) {
  .appLogoContainer {
    display: flex;
    justify-content: center;
  }

  nav {
    margin-top: 0;
  }
}
</style>
