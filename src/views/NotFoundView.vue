<template>
  <div class="notFound">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <div>Please navigate to an existing page.</div>
    <div class="arrow"></div>
    <div class="arrowTip"></div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>

<style>
.notFound {
  text-align: center;
  position: relative;
}

.notFound .arrow {
  position: absolute;
  border-right: 8px solid var(--color-border);
  right: 180px;
  top: 40px;
  height: 23vh;
  width: 20vw;
  border-radius: 50vw 0;
}

.notFound .arrowTip {
  position: absolute;
  right: 163px;
  top: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid var(--color-border);
}

@media (max-width: 800px) {
  .notFound .arrow,
  .notFound .arrowTip {
    display: none;
  }
}
</style>
