<script>
import IconHome from '@/assets/icons/home.svg'
import IconHomeFill from '@/assets/icons/home-fill.svg'
import IconExplore from '@/assets/icons/explore.svg'
import IconExploreFill from '@/assets/icons/explore-fill.svg'
import Container from '@/components/Container'

export default {
  name: 'Header',
  components: {
    Container,
    IconHome,
    IconHomeFill,
    IconExplore,
    IconExploreFill
  },
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  }),
}
</script>

<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">Suggester</router-link>
      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Ara..." />
      </form>
      <!-- navigation -->
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">
          <v-avatar size="30" v-if="0 === 0">
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
          </v-avatar>
          <v-skeleton-loader v-else
              v-bind="attrs"
              type="avatar"
          ></v-skeleton-loader>
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<style scoped>
.header {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
}
.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
}
.search {
  display: none;
  @media (--t) {
    display: block;
    text-align: center;
    input {
      width: 215px;
      height: 28px;
      border: 1px solid rgb(var(--b6a));
      background-color: rgb(var(--b3f));
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a));
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (--t) {
    height: auto;
    border: 0;
    position: static;
    justify-content: flex-end;
    a {
      margin-left: 20px;
    }
  }
}
</style>
