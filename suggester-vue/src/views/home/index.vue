<script>
import CustomCategoryList from "@/components/CustomCategoryList";
import Tabs from "@/components/tabs/tabs";

export default {
  name: 'Home',
  components: {
    Tabs,
    CustomCategoryList
  }
}
</script>

<template>
  <div class="home">
    <div class="timeline">
      <Tabs />
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
