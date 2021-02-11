<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default : "https://cdn.vuetifyjs.com/images/john.jpg"
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
.avatar{
  padding: 2px;
  border-radius: 999px;
  display: inline-flex;
  background: linear-gradient(219deg, rgba(184,63,140,1), rgba(237,158,90,1) 100% );

  img{
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
