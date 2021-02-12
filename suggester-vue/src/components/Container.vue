<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  components: {}
}
</script>

<style scoped>
.container {
  max-width: 1020px;
  margin-right: auto;
  margin-left: auto;
}
</style>
