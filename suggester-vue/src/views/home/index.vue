<script>
import Post from '@/components/Post'
import CustomCategoryList from "@/components/CustomCategoryList";

export default {
  name: 'Home',
  components: {
    CustomCategoryList,
    Post
  }
}
</script>

<template>
  <div class="home">
    <div class="timeline">
      <Post />
    </div>
    <div class="sidebar">
      <CustomCategoryList />
      <CustomCategoryList />
      <CustomCategoryList />
      <CustomCategoryList />
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
