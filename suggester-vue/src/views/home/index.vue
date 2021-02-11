<script>
import CustomText from '@/components/CustomText'
import Avatar from "@/components/Avatar";

export default {
  name: 'Home',
  components: {
    Avatar,
    CustomText
  }
}
</script>

<template>
  <div class="home">
    <div class="timeline">
      <CustomText>Post</CustomText>
      <Avatar :size="40" />
    </div>
    <div class="sidebar">
      <CustomText>SideBar</CustomText>
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
