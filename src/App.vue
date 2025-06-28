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
        </div>
        <nav class="navigationLinks">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/games">Games</RouterLink>
          <RouterLink to="/art">Art</RouterLink>
          <RouterLink to="/devblog">Dev Blog</RouterLink>
          <RouterLink to="/about">About</RouterLink>
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
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-border);
  margin-bottom: 1rem;
  background: var(--color-background);
  box-shadow: 0px 5px 45px var(--color-background);
}

.appLogoContainer {
  padding: 0 1rem;
}

.AppLogo {
  fill: var(--color-logo);
}

nav {
  position: fixed;
  right: 0px;
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
  padding: 0 2rem 100px 2rem;
  margin-top: 90px;
}

@media (max-width: 800px) {
  .header {
    position: relative;
    flex-direction: column;
    height: 80px;
    border-bottom: none;
    margin-bottom: 0;
  }

  .appLogoContainer {
    display: flex;
    justify-content: center;
  }

  nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    margin-top: 0;
    padding-top: 10px;
    width: 100%;
    font-size: 12px;
    text-align: center;
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 1rem;
    background: var(--color-background);
    box-shadow: 0px 5px 45px var(--color-background);
  }

  .content {
    margin-top: 0px;
    min-height: calc(100vh - 170px);
  }
}
</style>
