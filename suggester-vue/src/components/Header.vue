<script>
import IconHome from '@/assets/icons/home.svg'
import IconHomeFill from '@/assets/icons/home-fill.svg'
import IconExplore from '@/assets/icons/explore.svg'
import IconExploreFill from '@/assets/icons/explore-fill.svg'
import Container from '@/components/Container'
import Avatar from '@/components/Avatar'
import NotLogInComponent from '@/components/NotLogInComponent'

export default {
  name: 'Header',
  components: {
    NotLogInComponent,
    Avatar,
    Container,
    IconHome,
    IconHomeFill,
    IconExplore,
    IconExploreFill
  },
  data: () => ({})
}
</script>

<template>
  <header class="header">
    <Container class="header-inner">
      <!-- logo -->
      <router-link to="/" class="logo">
        <v-icon medium color="purple darken-2" style="margin-right: 20px">
          mdi-dialpad
        </v-icon>
        <p style="font-family: Roboto, sans-serif ">Suggester</p>
      </router-link>

      <!-- search -->
      <form class="search">
        <input type="text" placeholder="Ara..." />
      </form>

      <!-- navigation -->
      <nav class="navigation" v-if="1 === 1">
        <NotLogInComponent />
      </nav>
      <nav class="navigation" v-else>
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/profile">
          <Avatar size="26" />
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
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: #4a4a4a;
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
