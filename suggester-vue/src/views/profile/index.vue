<template>
  <div class="home">
    <h1>Profile</h1>
    <div id="nav">
      <router-link to="/profile">Post</router-link> ||
      <router-link to="/profile/activity">Activity</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {
  }
}
</script>

<style scoped>
.h1{
  color: rgb(var(--b6a));
}
</style>
